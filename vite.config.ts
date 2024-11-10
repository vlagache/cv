import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: "/cv/",
    resolve: {
        alias: {
            "@lib": "/src/lib",
            "@assets": "/src/assets",
            "@components": "/src/components",
        },
    },
})
