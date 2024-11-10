import { ThemeMode } from "@lib/enums"
import { writable } from "svelte/store"

export const themeMode = writable(ThemeMode.DARK)
