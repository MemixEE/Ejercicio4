const puppeteer = require('puppeteer');
const percySnapshot = require('@percy/puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com/', { waitUntil: 'networkidle2' });
  await percySnapshot(page, 'Example Site');

  await browser.close();
})();
