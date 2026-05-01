# Velô — Aplicação e Testes

Projeto frontend em React + Vite com testes E2E usando Playwright.

## Estrutura relevante

- Aplicação: arquivos fontes em `src/`.
- Configuração do Playwright: [playwright.config.ts](playwright.config.ts#L1-L200).
- Testes E2E: `playwright/tests/` (ex.: [playwright/tests/pedidos.spec.ts](playwright/tests/pedidos.spec.ts#L1-L200)).

> Observação: o helper de testes está em `playwright/suport/helpers.ts`.

## Pré-requisitos

- Node.js (recomendado 16+)
- npm

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Instale os binários do Playwright (navegadores):

```bash
npx playwright install
```

## Executando a aplicação (separado dos testes)

- Rodar em modo de desenvolvimento:

```bash
npm run dev
```

- Gerar build de produção:

```bash
npm run build
```

- Servir versão `build` para checar manualmente:

```bash
npm run preview
```

## Executando os testes (Playwright)

Observação: o `playwright.config.ts` já contém `webServer` que tenta iniciar a aplicação com `npm run dev` antes dos testes. Se já houver um servidor rodando, ele será reaproveitado.

- Rodar todos os testes (headless):

```bash
npx playwright test
# ou
npm test
```

- Rodar testes em modo guiado (headed):

```bash
npm run test:headed
```

- Abrir a UI interativa do Playwright Test Runner:

```bash
npm run test:ui
```

- Rodar em modo de depuração (debug):

```bash
npm run test:debug
```

## Notas sobre a configuração de testes

- `testDir` foi ajustado para `./playwright/tests` (observe a pasta onde seus testes ficam).
- Use seletores acessíveis (`getByRole`, `getByText`) sempre que possível — `data-testid` deve ser fallback.
- O `webServer` tem `reuseExistingServer: !process.env.CI` para não reiniciar o servidor local desnecessariamente.

## Problemas comuns

- Se os testes não encontrarem o servidor, aumente o timeout em `playwright.config.ts` ou garanta que `npm run dev` inicia corretamente.
- Se a opção `--ui` não for reconhecida, atualize o script `test:ui` em `package.json` para `npx playwright test --ui`.

## Quero ajuda para...

- Posso executar a suíte de testes e enviar o log.
- Posso criar scripts adicionais para rodar subsets de testes.

---

Arquivo de configuração principal: [playwright.config.ts](playwright.config.ts#L1-L200)# velo

