const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://martinsvt-exam.onrender.com/Shopping-List');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  