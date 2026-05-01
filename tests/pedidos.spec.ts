import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {

  const order = 'VLO-8JY5BZ';

  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByTestId('search-order-id').fill(order);
  await page.getByTestId('search-order-button').click();

  await expect(page.getByTestId('order-result-id')).toContainText(order);
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');


});

test('deve exibir mensagem quando pedido não for encontrado', async ({ page }) => {
  const order = 'VLO-123456';

  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByTestId('search-order-id').fill(order);
  await page.getByTestId('search-order-button').click();

  await expect(page.locator('#root')).toContainText('Pedido não encontrado');
    await expect(page.locator('#root')).toContainText('Verifique o número do pedido e tente novamente');

    const title = page.getByRole('heading', { name: 'Pedido não encontrado' });
    await expect(title).toBeVisible();

    const message = page.locator('//p[contains(text(), "Verifique o número do pedido e tente novamente")]');
    const message2 = page.getByText('Verifique o número do pedido e tente novamente');
    const message3 = page.getByRole('paragraph', { name: 'Verifique o número do pedido e tente novamente' });
    const message4 = page.locator('p', { hasText: 'Verifique o número do pedido e tente novamente' });
    
    await expect(message).toBeVisible();
    await expect(message2).toBeVisible();
    await expect(message3).toBeVisible();
    await expect(message4).toBeVisible();

    await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - img
    - heading "Pedido não encontrado" [level=3]
    - paragraph: Verifique o número do pedido e tente novamente
    `);
    
});