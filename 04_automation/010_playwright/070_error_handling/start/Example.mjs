import { chromium } from "@playwright/test";
import env from "dotenv";
env.config();

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto(process.env.TARGET_URL);

  await page.waitForTimeout(2000);

  try {
    const inputLocator = page.locator('//*[@id="__next"]/div[1]/label/input');
    await inputLocator.type("美", { timeout: 1000 });
  } catch (e) {
    console.error(
      "An exception occurred during input processing of an input.",
      e
    );
  }

  const pager3Locator = page.locator(".page-link.page-number >> nth=-1");
  await pager3Locator.click();

  const cardLocator = page.locator(".cards.list-group-item");

  const cardCount = await cardLocator.count();
  console.log(cardCount);

  await browser.close();
})();
