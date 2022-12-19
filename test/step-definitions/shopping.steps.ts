import {Then, When } from "@wdio/cucumber-framework"; 
import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";
import checkoutPage from "../pages/checkout.page";

When('user buy one item', async () => {
    await loginPage.login(`${process.env.VALID_USER1}`, `${process.env.VALID_PASSWORD}`);
    await homePage.buyOneItemBackpack();
})

When('user buy two items', async () => {
    await loginPage.login(`${process.env.VALID_USER1}`, `${process.env.VALID_PASSWORD}`);
    await homePage.buyTwoItemsBackpackAndBikeLight();
})

When('user remove item from home page', async () => {
    await loginPage.login(`${process.env.VALID_USER1}`, `${process.env.VALID_PASSWORD}`);
    await homePage.addAndRemoveItemBackpackFromHomePage();
})

When('user remove item from item page', async () => {
    await homePage.addAndRemoveItemBackpackFromItemPage();
})

When('user remove item from cart page', async () => {
    await homePage.addAndRemoveItemBackpackFromCartPage();
})

Then('the purchase has been made', async () => {
    await expect(checkoutPage.completedOrderMessage).toBeDisplayed();
    await browser.pause(3000)
})

Then('item is removed', async () => {
    await expect(homePage.itemInBasketIcon).not.toBeDisplayed();
})