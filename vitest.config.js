import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [],
    test: {
        globals: true, 
        include: ['tests/**/*.{test,spec}.{js,ts}'],
        coverage: {
            reporter: ['text', 'json-summary'],
            reportsDirectory: './public/coverage',
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