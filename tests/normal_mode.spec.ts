import test, { Browser, BrowserContext, chromium, Page } from "playwright/test";

test('Open browser without incognito mode', async() => {

    const browser:BrowserContext = await  chromium.launchPersistentContext('./sessions', {headless:false});
    
    const pages = browser.pages();
    const page = pages[0];

    // const page:Page = await browser.newPage();
    
    await page.goto("https://www.google.com");

    await page.waitForTimeout(5000);
})