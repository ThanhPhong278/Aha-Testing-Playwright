import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from '@playwright/test';
import {pageFixture } from '../../hooks/pageFixture';
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/login.json"

const loginPage = new LoginPage(pageFixture.page);
const assert = new Assert(pageFixture.page);
setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
    await pageFixture.page.goto(process.env.BASEURL);
    pageFixture.logger.info("Navigated to the Salon Admin");
});

Given('User enter the password as {string}', async function (password) {
    await pageFixture.page.getByPlaceholder('비밀번호 입력').fill(password);
});

Given('User enter the username as {string}', async function (username) {
    await pageFixture.page.getByPlaceholder('아이디 입력').fill(username);
});

When('User click on the login button', async function () {
    await pageFixture.page.getByRole('button', { name: '로그인' }).click();
    await pageFixture.page.waitForLoadState();
});

Then('Login should be success', async function () {
    const text = await pageFixture.page.getByRole('button', { name: 'vpsalon1kr' }).textContent();
    console.log("Username: " + text);
});

// Given('User navigates to the application', async function () {
//     await pageFixture.page.goto(process.env.BASEURL);
// });

// Given('User enter the password as', async function (password) {
//     await loginPage.enterPassword(data.password);
// });

// Given('User enter the username as', async function (username) {
//     await loginPage.enterUserName(data.username);
// });

// When('User click on the login button', async function () {
//     await loginPage.clickLoginButton();
// });

// Then('Login should be success', async function () {
//     const text = await pageFixture.page.getByRole('button', { name: 'vpsalon1kr' }).textContent();
//     assert.assertTextContains(text);

// });