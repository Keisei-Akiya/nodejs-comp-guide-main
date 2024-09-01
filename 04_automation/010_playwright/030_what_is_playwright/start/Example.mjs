import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  // CSSセレクター
  const pageTitleLocator = page.locator(".navbar-brand"); // classは"." idは#
  const pageTitle = await pageTitleLocator.innerText();
  // console.log(pageTitle);

  // 文字列で要素を取得
  const textLocator = await page.locator("text=名刺管理アプリ");
  const pageText = await textLocator.innerText();
  // console.log(pageText);

  // xpath
  const xpathLocator = await page.locator('xpath=//*[@id="__next"]/nav/div/a');
  const xpathText = await xpathLocator.innerText();
  console.log(xpathText);

  await browser.close();
})();
