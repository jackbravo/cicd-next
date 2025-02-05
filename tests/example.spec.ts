import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create/);
});

test('get started link', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Interesting');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Your most recent post: Interesting').click();
});
