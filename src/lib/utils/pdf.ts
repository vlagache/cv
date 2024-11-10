import { ThemeMode } from "@lib/enums"
import dayjs from "dayjs"

export function downloadCorrectPdf(themeMode: ThemeMode) {
    const link = document.createElement("a")
    link.href = `/cv/${themeMode}-cv-vincent-lagache.pdf`
    link.download = `cv-vincent-lagache-${dayjs().format("DD-MM-YYYY")}.pdf`
    link.click()
}
