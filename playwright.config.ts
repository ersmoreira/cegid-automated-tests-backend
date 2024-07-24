import { PlaywrightTestConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { resolve } from 'path';

const path = resolve(__dirname, 'data', '.env');
dotenv.config({ path });

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    browserName: 'chromium', // Navegador padrão
    headless: true,
    baseURL: 'https://gorest.co.in/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['list'], ['json', { outputFile: './reports/test-results.json' }]], // Relatórios de testes
};

export default config;
