import {Browser, chromium, test, Page, BrowserContext} from '@playwright/test';
import { BASE_URL } from '../config/env';
import { credentials } from '../config/credentials'
import { LoginPage } from '../pages/LoginPage';


test('login test', async() => {

    const browser:Browser = await chromium.launch({headless:false});

    // browser context 1
    const browserContext:BrowserContext = await browser.newContext();

    const page1:Page = await browserContext.newPage();
    const loginPage = new LoginPage(page1);

    await page1.goto(BASE_URL);
    await loginPage.login(credentials.standard_user.username, credentials.standard_user.password);




    // browser context 2
    const page2:Page = await browserContext.newPage();
    const loginPage2 = new LoginPage(page2);

    await page2.goto(BASE_URL);
    await loginPage2.login(credentials.locked_out_user.username, credentials.locked_out_user.password);

    

})