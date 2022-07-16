const puppeteer = require('puppeteer');
const fs  = require('fs/promises');

async function getData(){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://food.grab.com/sg/en/restaurants");

    // const names = ['red', 'orange','yellow'];
    // await fs.writeFile("names.txt", names.join("\r\n"))
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".name___2epcT")).map(x => x.textContent)
        
        // const titlearr = [...title];
        // const res = titlearr.map(e=>e.innerText)
        
        // return {
        //     res
        // };
    });
    await fs.writeFile("names.txt", names.join("\r\n"))
    // await browser.close();
    // return dimensions;
    await browser.close();
};

getData();
// module.exports = {getData};
