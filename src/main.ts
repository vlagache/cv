import { applyTheme } from "@lib/utils/theme"
import { themeMode } from "@stores/themeMode"
import { mount } from "svelte"
import "./app.css"
import App from "./App.svelte"

const themeModeEnv = import.meta.env.VITE_THEME_MODE
themeMode.subscribe((value) => {
    applyTheme(value)
})

themeMode.set(themeModeEnv)

const app = mount(App, {
    target: document.getElementById("app")!,
})

export default app
