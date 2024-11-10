import { svelte } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: "/cv/",
    resolve: {
        alias: {
            "@lib": "/src/lib",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@stores": "/src/stores",
        },
    },
})
