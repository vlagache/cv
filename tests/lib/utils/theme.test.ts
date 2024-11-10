import { beforeEach, describe, expect, it } from "vitest"
import { ThemeMode, ThemeName } from "../../../src/lib/enums"
import { applyTheme, themesColorValues } from "../../../src/lib/utils/theme"

describe("applyTheme", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div></div>
        `
    })

    it("should apply dark theme correctly", () => {
        // Given
        const themeMode = ThemeMode.DARK

        // When
        applyTheme(themeMode)

        // Then
        const root = document.querySelector(":root") as HTMLElement
        const colors = themesColorValues[ThemeName.MACCHIATO]
        for (const [variable, value] of Object.entries(colors)) {
            expect(root.style.getPropertyValue(variable)).toBe(value)
        }
    })
    it("should apply light theme correctly", () => {
        // Given
        const themeMode = ThemeMode.LIGHT

        // When
        applyTheme(themeMode)

        // Then
        const root = document.querySelector(":root") as HTMLElement
        const colors = themesColorValues[ThemeName.LATTE]
        for (const [variable, value] of Object.entries(colors)) {
            expect(root.style.getPropertyValue(variable)).toBe(value)
        }
    })
})
