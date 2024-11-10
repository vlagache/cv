import puppeteer from "puppeteer";

const args = process.argv.slice(2);
const theme = args[0];
const fileName = `${theme}-cv-vincent-lagache.pdf`;

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://localhost:5173/cv/", {
        waitUntil: "networkidle2",
    })

    await page.pdf({
        path : `./public/${fileName}`,
        format: "A4",
        printBackground: true,
        scale: 1,
    })

    await browser.close()
})()

console.log(`PDF généré : ${fileName}`);