import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.getByRole('button', { name: ' Date of Journey 26 Jul,' }).click();
  await page.getByRole('button', { name: 'Saturday, July 26, 2025,' }).click();
  await page.getByRole('button', { name: ' Date of Journey 26 Jul,' }).click();
  await page.getByText('India\'s No. 1 online bus ticket booking siteFromToDate of Journey26 Jul,').click();
  await page.getByRole('button', { name: ' Date of Journey 26 Jul,' }).click();
  await page.getByRole('button', { name: 'Saturday, July 26, 2025,' }).click({
    button: 'right'
  });
  await page.locator('div').filter({ hasText: /^Book trains for festivalsBook now to get confirmed ticket$/ }).first().click();
  await page.getByRole('button', { name: ' Date of Journey 26 Jul,' }).click();
  await page.getByRole('button', { name: 'Saturday, July 26, 2025,' }).click({
    button: 'right'
  });
});