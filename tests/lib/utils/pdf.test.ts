import { describe, it, expect, vi } from "vitest"
import { downloadCorrectPdf } from "../../../src/lib/utils/pdf"
import { ThemeMode } from "../../../src/lib/enums"

vi.mock("dayjs", () => {
    return {
        default: () => ({
            format: () => "07-05-1987",
        }),
    }
})

describe("downloadCorrectPdf", () => {
    it("should download the correct pdf", () => {
        // Given
        const themeMode = ThemeMode.DARK
        const createElementSpy = vi.spyOn(document, "createElement")
        const clickSpy = vi.fn()

        const mockLink = {
            href: "",
            download: "",
            click: clickSpy,
        }

        createElementSpy.mockReturnValue(mockLink as any)

        // When
        downloadCorrectPdf(themeMode)

        // Then
        expect(createElementSpy).toHaveBeenCalledWith("a")
        expect(mockLink.href).toBe("/cv/dark-cv-vincent-lagache.pdf")
        expect(mockLink.download).toBe("cv-vincent-lagache-07-05-1987.pdf")
        expect(clickSpy).toHaveBeenCalled()
    })
})
