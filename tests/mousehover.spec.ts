import test, { Locator } from "playwright/test";

test('mouse hover test', async({page}) => {

    const url = 'https://www.bigbasket.com/';

    await page.goto(url,{waitUntil:'load'});

    await page.locator('[id="headlessui-menu-button-\\:R5bab6\\:"]').click();
    await page.getByRole('link', { name: 'Footwear' }).hover();

    await page.waitForTimeout(5000);

});