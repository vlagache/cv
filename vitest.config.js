import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        environment: 'jsdom', 
        alias: {
            '@assets/': new URL('./src/assets/', import.meta.url).pathname
        },
        include: ['**/*.test.ts'],
        coverage: {
            reporter:  ['text', 'json-summary'],
            reportsDirectory: './src/assets/data/coverage',
            exclude: [
                '**/*.config.js',
                '**/*.config.ts',
                '**/*.test.ts',
                '**/*.d.ts',
                '**/*.svelte',
                '**/*.server.ts',
                'src/main.ts',
              ],
        },
        mockReset: true,
    },
});