export async function getCoverageData() {
    const response = await fetch('/cv/coverage/coverage-summary.json');
    const data = await response.json();
    return data;
}