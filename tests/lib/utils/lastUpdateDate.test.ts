import { describe, it, expect, vi } from "vitest"
// TODO:  Ugly import but when I try to do it with aliases in
// vitest.config the test runs but there's a linter error ts:2307
import { getLastUpdateDate } from "../../../src/lib/utils/lastUpdateDate"

vi.mock("@assets/data/last_update_date.txt?raw", () => {
    return { default: "1987-05-07" }
})
describe("getLastUpdateDate", () => {
    it("should return the formatted date", async () => {
        // Given
        const expectedDate = "07/05/1987"

        // When
        const result = await(getLastUpdateDate())
        // Then
        expect(result).toEqual(expectedDate)
    })
})
