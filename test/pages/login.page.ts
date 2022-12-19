import Actions from "../utils/actions"; 

class LoginPage {
    public get username() {
        return $('#user-name');
    }

    public get password() {
        return $('#password');
    }

    public get loginButton() {
        return $('#login-button');
    }

    public async login(username: string, password: string) {
        await browser.url(`${process.env.SAUCEDEMO_URL}`);
        await Actions.typeIn(this.username, username);
        await Actions.typeIn(this.password, password);
        await Actions.clickOn(this.loginButton);
    }
}
export default new LoginPage();