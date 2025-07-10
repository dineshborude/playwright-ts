import { chromium } from "playwright";

describe('open browser', () => {

    test('Open Letcode', async () => {

        const browser = await chromium.launch();
        const context = await browser.newContext();

        const page = await context.newPage();
        await page.goto('https://letcode.in');

        await browser.close();

    })

})