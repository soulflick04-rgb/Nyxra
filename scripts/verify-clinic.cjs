const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  const base = process.env.SITE_URL || "http://localhost:3000";
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of ["/", "/portfolio", "/clinic-demo"]) {
      await page.goto(base + route);
      const link = page.getByRole("link", {
        name: "Open the live clinic website demo",
      });
      await link.scrollIntoViewIfNeeded();
      const img = link.locator("img");
      await img.evaluate((el) => el.decode());
      assert.equal(await img.evaluate((el) => el.naturalWidth), 1440);
      const box = await img.boundingBox();
      assert(
        Math.abs(box.width / box.height - 1.8) < 0.01,
        "image must retain original proportions",
      );
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        ),
        false,
      );
      await page.getByRole("button", { name: "Gym", exact: true }).click();
      assert.equal(
        await page
          .getByRole("link", { name: "Open the live gym website demo" })
          .getAttribute("href"),
        "https://elevate-functional-fitness.lovable.app/",
      );
      await page.getByRole("button", { name: "Clinic", exact: true }).click();
      await link.waitFor();
      if (route === "/")
        await link.screenshot({ path: `qa/clinic-tile-${width}.png` });
      await link.focus();
      await page.keyboard.press("Enter");
      await page.waitForURL("https://clinicwebsitedemo22.netlify.app/");
      assert((await page.title()).includes("CarePlus"));
      console.log(
        `PASS ${width}px ${route}: image, tabs and direct navigation`,
      );
    }
  }
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
