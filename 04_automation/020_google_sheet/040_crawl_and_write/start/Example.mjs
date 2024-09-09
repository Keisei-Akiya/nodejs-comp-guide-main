import { GoogleSpreadsheet } from "google-spreadsheet";
import env from "dotenv";
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require("../../../../google_secrets.json");
import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const cardLocators = page.locator(".cards.list-group-item");
  const cardCount = await cardLocators.count();

  const fetchedCards = [];
  for (let i = 0; i < cardCount; i++) {
    const cardLocator = cardLocators.locator(`nth=${i} >> a`);
    const cardPersonName = await cardLocator.textContent();
    await cardLocator.click();

    let companyText = "";
    try {
      const companyLocator = page.locator(".card-title.company");
      companyText = await companyLocator.textContent();
    } catch {}

    fetchedCards.push({
      name: cardPersonName,
      company: companyText,
    });

    const backLocator = page.locator(
      ".position-absolute.top-0.end-0.btn.btn-secondary"
    );
    await backLocator.click();
  }

  await browser.close();

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const visitingCardSheet = doc.sheetsByTitle["visitingCard"];
  const row = visitingCardSheet.addRows(fetchedCards);
})();
