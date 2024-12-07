import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { after } from "node:test";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext();
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await context.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

After(async function ({ pickle, result }) {
    let img: Buffer;
    console.log(result?.status);
    const path = `./test-results/trace/${pickle.id}.zip`;
    if ( result?.status == Status.PASSED){
         img = await pageFixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`, type: "png"})
        await this.attach(img, "image/png")
    }  
    await context.tracing.stop({path: path})
    await pageFixture.page.close();
    await context.close();
    if (result?.status == Status.PASSED){
        await this.attach(
            img, "image/png"
        );
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');
    }
});

AfterAll(async function () {
    await browser.close();
})