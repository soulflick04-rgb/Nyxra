const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  fs.mkdirSync("qa", { recursive: true });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const routes = [
    "/",
    "/services",
    "/pricing",
    "/portfolio",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/clinic-demo",
    "/demos/clinic",
    "/thank-you",
  ];
  const checks = [];
  for (const width of [360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of routes) {
      const res = await page.goto("http://127.0.0.1:3000" + route);
      assert.equal(res.status(), 200, route);
      await page.locator("h1").waitFor();
      assert.equal(await page.locator("h1").count(), 1, route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}`);
      checks.push(`${width}px ${route}: OK`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:3000/");
  await page.getByRole("button", { name: "Menu +" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Pricing" })
    .click();
  await page.waitForURL("**/pricing");
  assert.equal(
    await page
      .getByRole("button", { name: "Menu +" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.goto("http://127.0.0.1:3000/portfolio");
  for (const name of ["Gym", "Coaching", "Clinic"]) {
    await page.getByRole("button", { name, exact: true }).click();
    assert.equal(
      await page
        .getByRole("button", { name, exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    const urls = {
      Clinic: "https://clinicwebsitedemo22.netlify.app/",
      Gym: "https://elevate-functional-fitness.lovable.app/",
      Coaching: "https://scholarspace-india-learning-hub.lovable.app/",
    };
    assert.equal(
      await page
        .getByRole("link", {
          name: `Open the live ${name.toLowerCase()} website demo`,
        })
        .getAttribute("href"),
      urls[name],
    );
  }
  await page.goto("http://127.0.0.1:3000/");
  await page
    .locator("summary")
    .filter({ hasText: "Will it work on phones?" })
    .click();
  assert.equal(await page.locator("details[open]").count(), 1);
  await page.goto(
    "http://127.0.0.1:3000/contact?package=Lead%20Growth%20System",
  );
  await page.waitForFunction(
    () =>
      document.querySelector("[name=package]").value === "Lead Growth System",
  );
  let requests = 0;
  let outcome = "error";
  await page.route("https://formsubmit.co/**", async (route) => {
    requests++;
    if (outcome === "network") return route.abort();
    await route.fulfill({
      status: outcome === "error" ? 500 : 200,
      contentType: "application/json",
      body: JSON.stringify({ success: outcome === "success" }),
    });
  });
  await page.getByRole("button", { name: "Send my enquiry" }).click();
  assert.equal(requests, 0, "empty form submitted");
  await page.getByLabel("Your name", { exact: true }).fill("Test Caller");
  await page.getByLabel("Business name", { exact: true }).fill("Test Business");
  await page.getByLabel("Email", { exact: true }).fill("test@example.com");
  await page
    .getByLabel("Business type", { exact: true })
    .selectOption("Clinic");
  await page
    .getByLabel("What would you like your website to do?")
    .fill("A clearly labelled test enquiry that must never be sent.");
  await page.getByRole("checkbox").check();
  for (const mode of ["error", "network", "rejected", "success"]) {
    outcome = mode;
    await page.getByRole("button", { name: "Send my enquiry" }).click();
    if (mode === "success") {
      await page.locator(".success").waitFor();
      assert.equal(
        await page.getByLabel("Your name", { exact: true }).inputValue(),
        "",
      );
    } else {
      await page.locator(".form-status.error").waitFor();
      assert.equal(
        await page.getByLabel("Your name", { exact: true }).inputValue(),
        "Test Caller",
      );
    }
  }
  assert.equal(requests, 4);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000/");
  assert.equal(
    await page
      .locator(".particle")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
    "particle-drift",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  assert.equal(
    await page
      .locator(".particle")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
    for (const route of ["/", "/portfolio", "/contact", "/pricing"]) {
      await page.goto("http://127.0.0.1:3000" + route);
      await page.evaluate(() => document.fonts.ready);
      // Reveal every section before taking a full-page layout screenshot.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          window.scrollTo({ top: y, behavior: "instant" });
          await new Promise((resolve) => setTimeout(resolve, 80));
        }
        window.scrollTo({ top: 0, behavior: "instant" });
      });
      await page.waitForTimeout(900);
      assert.equal(
        await page.locator(".reveal-ready:not(.is-revealed)").count(),
        0,
        "all sections reveal on scroll",
      );
      await page.screenshot({
        path: `qa/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
        fullPage: true,
      });
    }
  }
  assert.deepEqual(errors, [], "browser runtime errors");
  fs.writeFileSync(
    "qa/results.json",
    JSON.stringify(
      {
        checks,
        interactions:
          "Menu, FAQ, 3 demo tabs/buttons, package selection, invalid form, HTTP failure, network failure, rejected payload, success, particle motion, reduced motion, all sections reveal",
        outboundFormRequests: "All four intercepted; none sent",
        browserErrors: errors,
      },
      null,
      2,
    ),
  );
  console.log(
    `PASS: ${checks.length} route/viewport checks; all interaction and form scenarios.`,
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
