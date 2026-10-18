const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");
const assert = require("node:assert/strict");
(async () => {
  const b = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const p = await b.newPage();
    await p.goto(
      (process.env.SITE_URL || "http://localhost:3000") + "/contact",
    );
    let result = { success: "false", message: "This form needs Activation." };
    let network = false;
    let calls = 0;
    await p.route("https://formsubmit.co/**", async (r) => {
      calls++;
      if (network) return r.abort();
      await r.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(result),
      });
    });
    await p.getByLabel("Your name", { exact: true }).fill("Local Test");
    await p.getByLabel("Business name", { exact: true }).fill("Local Test");
    await p.getByLabel("Email", { exact: true }).fill("test@example.com");
    await p.getByLabel("Business type", { exact: true }).selectOption("Clinic");
    await p
      .getByLabel("What would you like your website to do?")
      .fill("Intercepted test. Never sent to a real inbox.");
    await p.getByRole("checkbox").check();
    const send = p.getByRole("button", { name: "Send my enquiry" });
    await send.click();
    await p
      .getByRole("alert")
      .filter({ hasText: "temporarily unavailable" })
      .waitFor();
    assert.equal(
      await p.getByLabel("Your name", { exact: true }).inputValue(),
      "Local Test",
    );
    network = true;
    await send.click();
    await p
      .getByRole("alert")
      .filter({ hasText: "couldn’t confirm delivery" })
      .waitFor();
    assert.equal(
      await p.getByLabel("Your name", { exact: true }).inputValue(),
      "Local Test",
    );
    network = false;
    result = { success: "true", message: "Success" };
    await send.click();
    await p.locator(".form-status.success").waitFor();
    assert.equal(
      await p.getByLabel("Your name", { exact: true }).inputValue(),
      "",
    );
    assert.equal(calls, 3);
    console.log(
      "PASS activation error, network failure, preserved input and acknowledged success; all submissions intercepted",
    );
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
