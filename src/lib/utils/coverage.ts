import coverageContent from "@assets/data/coverage/coverage-summary.json"

export function getCoveragePercentage() {
    return coverageContent.total.lines.pct
}
