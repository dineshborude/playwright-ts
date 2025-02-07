import test, { Browser, BrowserContext, chromium, Page } from "playwright/test";

test('Open browser without incognito mode', async() => {

    const browser:BrowserContext = await  chromium.launchPersistentContext('', {headless:false, channel: 'chrome'});

    const pages = browser.pages();
    const page = pages[0];

    // const page:Page = await browser.newPage();
    
    await page.goto("https://www.google.com");
})