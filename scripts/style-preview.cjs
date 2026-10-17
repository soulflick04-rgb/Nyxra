const {
  chromium,
} = require("C:/Users/sriva/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
(async () => {
  const b = await chromium.launch({ channel: "chrome", headless: true });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  await p.goto("http://127.0.0.1:3000/");
  await p.waitForTimeout(1400);
  await p.screenshot({ path: "qa/meet-desktop.png" });
  await p.evaluate(() => window.scrollTo(0, 500));
  await p.waitForTimeout(250);
  await p.screenshot({ path: "qa/meet-scroll.png" });
  await p.setViewportSize({ width: 390, height: 844 });
  await p.goto("http://127.0.0.1:3000/");
  await p.waitForTimeout(1400);
  await p.screenshot({ path: "qa/meet-mobile.png" });
  await b.close();
})();
