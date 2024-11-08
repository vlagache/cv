import { describe, it, expect, vi } from "vitest"
// TODO:  Ugly import but when I try to do it with aliases in
// vitest.config the test runs but there's a linter error ts:2307
import { getCoverageData } from "../../../src/lib/utils/coverage"
import type { Mock } from "vitest"

global.fetch = vi.fn()

describe("getCoverageData", () => {
    it("fetches coverage data sucessfully", async () => {
        const mockDataCoverage = { total: 100, covered: 50, percentage: 50 }
        ;(fetch as Mock).mockResolvedValue({
            ok: true,
            json: async () => mockDataCoverage,
        })
        const data = await getCoverageData()
        expect(data).toEqual(mockDataCoverage)
    })
})
