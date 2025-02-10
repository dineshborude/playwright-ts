import test, { Locator } from "playwright/test";

test('mouse hover test', async({page}) => {

    const url = 'https://www.spicejet.com/';

    await page.goto(url,{waitUntil:'load'});

    await page.getByText('Add-ons').first().hover();

    await page.getByText('Taxi').first().click();

    await page.waitForTimeout(5000);

});