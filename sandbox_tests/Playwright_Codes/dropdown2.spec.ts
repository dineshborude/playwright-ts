import {Browser, chromium, test, Page, Locator} from '@playwright/test';


test('handle dropdown', async () => {

    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'})

    const page:Page = await browser.newPage();

    await page.goto('https://letcode.in/dropdowns');

    const ddLocator:Locator = page.locator('#fruits');
    await ddLocator.selectOption("2");

    await page.waitForTimeout(3000);


})
