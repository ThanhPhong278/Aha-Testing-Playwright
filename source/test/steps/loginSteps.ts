import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from '@playwright/test';
import {pageFixture } from '../../hooks/pageFixture';
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/login.json"

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
    await new LoginPage(pageFixture.page).navigateToLoginPage();
    pageFixture.logger.info("User navigates to the application to Ahasoft Login Page");
});

Given('User enter the username from test data', async function () {
    await new LoginPage(pageFixture.page).enterUserName(data.username);
    pageFixture.logger.info("User enters the username");
});

Given('User enter the password from test data', async function () {
    await  new LoginPage(pageFixture.page).enterPassword(data.password);
    pageFixture.logger.info("User enters the password");
});

When('User click on the login button', async function () {
    await new LoginPage(pageFixture.page).clickLoginButton();
    pageFixture.logger.info("User click on the login button");
});

Then('Login should be success', async function () {
    const text = await pageFixture.page.getByRole('button', { name: 'vpsalon1kr' }).textContent();
    const assert = new Assert(pageFixture.page);
    assert.assertTextContains(text);
    pageFixture.logger.info("Login should be success");
});

