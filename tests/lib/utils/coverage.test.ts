import { describe, it, expect, vi } from "vitest"
import { getCoveragePercentage } from "../../../src/lib/utils/coverage"

vi.mock("@assets/data/coverage/coverage-summary.json", () => {
    return {
        default: {
            total: {
                lines: {
                    pct: 85.5,
                },
            },
        },
    }
})

describe("getCoveragePercentage", () => {
    it("should return the correct coverage percentage", () => {
        // When
        const coveragePercentage = getCoveragePercentage()

        // Then
        expect(coveragePercentage).toBe(85.5)
    })
})
