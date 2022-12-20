import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/home.page";
import loginPage from "../pages/login.page";

When('user add item and reset aplication state', async () => {
    await loginPage.login(`${process.env.VALID_USER1}`, `${process.env.VALID_PASSWORD}`);
    await homePage.addBackpackItemAndResetApp();
})

Then('item is not selected',async () => {
    await expect(homePage.addButtonItemBackpack).toBeDisplayed();
})