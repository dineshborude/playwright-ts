import { test, expect } from "playwright/test";
import path from "path"; // File path handling for cross-platform support

test("file upload", async ({ page }) => {
  await page.goto("https://formstone.it/components/upload/demo/");


  const fileInput = page.locator("#example-0 input[type='file']");

  // path.join() for correct file path formatting
  const filePath = path.join("C:/Users/dines/Downloads/IMG_1273.jpg");

  //select file
  await fileInput.setInputFiles(filePath);

  await page.waitForTimeout(5000);

  //deselect file
  await fileInput.setInputFiles([]);
  await page.waitForTimeout(5000);

});
