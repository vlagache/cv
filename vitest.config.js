import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [],
    test: {
        globals: true,
        environment: 'jsdom', 
        alias: {
            '@lib/': new URL('./src/lib/', import.meta.url).pathname,
            '@assets/': new URL('./src/assets/', import.meta.url).pathname,
            '@components/': new URL('./src/components/', import.meta.url).pathname,
            '@stores/': new URL('./src/stores/', import.meta.url).pathname,
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
            clean: false,
        },
        mockReset: true,
    },
});