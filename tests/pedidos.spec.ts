import { test, expect } from '@playwright/test';

test.describe('Consulta de Pedidos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // use baseURL no config
    await page.getByRole('link', { name: 'Consultar Pedido' }).click();
    await expect(page.getByRole('heading', { name: 'Consultar Pedido' })).toBeVisible();
  });

  test('deve consultar um pedido aprovado', async ({ page }) => {
    const order = 'VLO-8JY5BZ';
    await page.getByTestId('search-order-id').fill(order);
    await page.getByTestId('search-order-button').click();

    const id = page.getByTestId('order-result-id');
    const status = page.getByTestId('order-result-status');

    await expect(id).toHaveText(order);
    await expect(status).toHaveText('APROVADO');
  });

  test('deve exibir mensagem quando pedido não for encontrado', async ({ page }) => {
    const order = 'VLO-123456';
    await page.getByTestId('search-order-id').fill(order);
    await page.getByTestId('search-order-button').click();

    const notFoundHeading = page.getByRole('heading', { name: 'Pedido não encontrado' });
    const message = page.getByText('Verifique o número do pedido e tente novamente');

    await expect(notFoundHeading).toBeVisible();
    await expect(message).toBeVisible();
  });
});