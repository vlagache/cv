import type { Config } from "tailwindcss"
import flowbitePlugin from "flowbite/plugin"

export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                jetbrains: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [
        flowbitePlugin,
        require("@catppuccin/tailwindcss")({
            prefix: "cat",
            defaultFlavour: "macchiato",
        }),
    ],
} satisfies Config
