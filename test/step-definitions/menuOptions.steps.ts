import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";

Given('standard_user logged in', async () => {
    await loginPage.login(`${process.env.STANDARD_USER}`, `${process.env.PASSWORD}`);
});

When('user log out from aplication', async () => {
    await homePage.logOut();
});

Then('user is logged out', async () => {
    expect(browser).toHaveUrl(`${process.env.SAUCEDEMO_URL}`)
});

When('user add item and reset application', async () => {
    await homePage.addBackpackItemAndResetApp();
});

Then('item is not selected', async () => {
    await expect(homePage.addButtonItemBackpack).toBeDisplayed();
});

When('user from another page go back to home page', async () => {
    await homePage.allItemslinkClick()
});

Then('user is on home page', async () => {
    expect(browser).toHaveUrl(`${process.env.SAUCEDEMO_URL}/inventory.html`)
})

When('user click on a ABOUT link', async () => {
    await homePage.aboutLinkClick()
})

Then('user is on another site', async () => {
    expect(browser).toHaveUrl("https://saucelabs.com/")
})