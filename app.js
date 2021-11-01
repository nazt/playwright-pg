const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.goto('https://ml.in.th/ml-block/');
    await page.goto('https://get.webgl.org/');
    await page.screenshot({ path: `gl-${browserType}.png` });
    await browser.close();
  }
})();
