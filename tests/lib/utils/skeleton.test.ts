// TODO:  Ugly import but when I try to do it with aliases in
// vitest.config the test runs but there's a linter error ts:2307
import {
    applyRandomBorderColor,
    toggleSkeleton,
} from "../../../src/lib/utils/skeleton"
import { describe, it, expect, beforeEach, vi } from "vitest"

describe("applyRandomBorderColor", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="skeleton"></div>
            <div class="skeleton"></div>
        `
    })

    it("should apply a random border color to the skeleton elements with skeleton-disabled class if env variable is false", () => {
        // Given
        vi.stubEnv("VITE_SKELETON_MODE_ACTIVATED", "false")

        // When
        applyRandomBorderColor()

        // Then
        const skeletonElements = document.querySelectorAll(".skeleton")
        skeletonElements.forEach((element) => {
            expect(element.classList.contains("skeleton-disabled")).toBe(true)
            expect(element.className).toMatch(
                /border-cat-(teal|pink|flamingo|blue|mauve|yellow|green)/
            )
        })
    })
    it("should apply a random border color to the skeleton elements without skeleton-disabled class if env variable is true", () => {
        // Given
        vi.stubEnv("VITE_SKELETON_MODE_ACTIVATED", "true")

        // When
        applyRandomBorderColor()

        // Then
        const skeletonElements = document.querySelectorAll(".skeleton")
        skeletonElements.forEach((element) => {
            expect(element.classList.contains("skeleton-disabled")).toBe(false)
            expect(element.className).toMatch(
                /border-cat-(teal|pink|flamingo|blue|mauve|yellow|green)/
            )
        })
    })
})

describe("toggleSkeleton", () => {

    it("should toggle skeleton-disabled class on skeleton elements with class skeleton-disabled", () => {
        document.body.innerHTML = `
            <div class="skeleton skeleton-disabled"></div>
            <div class="skeleton skeleton-disabled"></div>
        `
        toggleSkeleton()
        let skeletonElements = document.querySelectorAll(".skeleton")
        skeletonElements.forEach((element) => {
            expect(element.classList.contains("skeleton-disabled")).toBe(false)
        })
    })
    it("should toggle skeleton-disabled class on skeleton elements without class skeleton-disabled", () => {
        document.body.innerHTML = `
            <div class="skeleton"></div>
            <div class="skeleton"></div>
        `
        toggleSkeleton()
        let skeletonElements = document.querySelectorAll(".skeleton")
        skeletonElements.forEach((element) => {
            expect(element.classList.contains("skeleton-disabled")).toBe(true)
        })
    })
})
