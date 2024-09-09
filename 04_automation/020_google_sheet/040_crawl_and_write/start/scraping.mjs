import { chromium } from "@playwright/test";

export  const async getEmployeesByScraping = () => {

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

}