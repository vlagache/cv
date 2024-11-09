import { describe, it, expect, vi } from "vitest"
// TODO:  Ugly import but when I try to do it with aliases in
// vitest.config the test runs but there's a linter error ts:2307
import { getCoveragePercentage } from "../../../src/lib/utils/coverage"

vi.mock("@assets/data/coverage/coverage-summary.json", () => ({
    default: {
        total: {
            lines: {
                pct: 85.5,
            },
        },
    },
}))

describe("getCoverageData", () => {
    it("should return the correct coverage percentage", () => {
        const coveragePercentage = getCoveragePercentage()
        expect(coveragePercentage).toBe(85.5)
    })
})
