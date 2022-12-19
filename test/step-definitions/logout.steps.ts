import { Then, When } from "@wdio/cucumber-framework"; 
import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";

When('user log out from aplication', async () => {
    await loginPage.login(`${process.env.VALID_USER1}`, `${process.env.VALID_PASSWORD}`);
    await homePage.logOut();
});

Then('user is logged out', async () => {
    expect(browser).toHaveUrl(`${process.env.SAUCEDEMO_URL}`)
})