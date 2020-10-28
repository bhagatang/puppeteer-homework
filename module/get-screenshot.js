const puppeteer = require('puppeteer');
const fs = require('fs');

async function getScreenshot(url, path) {
  const browser = await puppeteer.launch({
    'ignoreHTTPSErrors': true
  });
  const page = await browser.newPage();

  await page.goto(url)
    .catch(reason => console.log(reason));

  await page.setViewport({ width: 1280, height: 768 });

  const URL = await page.evaluate(() => location);

  await page.screenshot({ path: `${path}/screens/${URL.hostname}.png`, fullPage: true })

  const data = await JSON.stringify({ path: `${URL.href}` });

  await fs.appendFile('data.json', data, (err) => {
    if (err) return console.dir(err);
    console.log('Saved to data.json')
  })
  await browser.close();
}

module.exports = getScreenshot;