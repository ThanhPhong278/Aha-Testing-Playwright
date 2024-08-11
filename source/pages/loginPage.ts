import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
    private pageBase: PlaywrightWrapper;

    constructor(private page: Page) {
        this.pageBase = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "아이디 입력",  
        passwordInput: "비밀번호 입력", 
    }

    async navigateToLoginPage() {
        await this.pageBase.goto(process.env.BASEURL);
    }

    async enterUserName(username: string) {
        await this.page.getByPlaceholder(this.Elements.userInput).fill(username);
    }

    async enterPassword(password: string) {
        await this.page.getByPlaceholder(this.Elements.passwordInput).fill(password);
    }

    async clickLoginButton() {
        await this.page.getByRole('button', { name: '로그인' }).click();
}
    async loginUser(username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
