
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {

    private pageBase: PlaywrightWrapper
    
    constructor(private page: Page) {
        this.pageBase = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "'아이디 입력'",
        passwordInput: "'비밀번호 입력'",
        loginBtn: "'button', { name: '로그인' }'",
    }

    async navigateToLoginPage() {
        await this.pageBase.goto(process.env.BASEURL);
    }
    async enterUserName(Username: string) {
        await this.page.getByPlaceholder(this.Elements.userInput).fill(Username);
    }
    async enterPassword(Password: string) {
        await this.page.getByPlaceholder(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.pageBase.waitAndClick(this.Elements.loginBtn);
    }

    async loginUser(username: string, password: string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
