import actions from "../utils/actions";  
import { fakeData } from "../test-data/fakeData";
import checkoutPage from "./checkout.page";
import itemPage from "./item.page";

class HomePage {
    public get titleProducts() {
        return $('//*[.="Products"]')
    }

    public get errorMessage() {
        return $('[data-test="error"]')
    }

    public get menuButton() {
        return $('.bm-burger-button')
    }

    public get logoutButton() {
        return $('#logout_sidebar_link')
    }

    public get addButtonItemBackpack() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    public get removeButtonItemBackpack() {
        return $('#remove-sauce-labs-backpack')
    }

    public get addButtonItemBikeLight() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    public get basketIcon() {
        return $('.shopping_cart_link')
    }

    public get itemInBasketIcon() {
        return $('.shopping_cart_badge')
    }

    public get goToProductBackpackPage(){
        return $('//div[.="Sauce Labs Backpack"]')
    }

    public get itemPriceBackpack(){
        return $('.inventory_item:nth-child(1) .inventory_item_price')
    }
    
    public async logOut() {
        await actions.clickOn(this.menuButton);
        await actions.clickOn(this.logoutButton);
    }

    public async buyOneItemBackpack() {
        await actions.clickOn(this.addButtonItemBackpack);
        await actions.clickOn(this.basketIcon);
        await actions.clickOn(checkoutPage.checkoutButton);
        await actions.typeIn(checkoutPage.firstName, fakeData.firstName);
        await actions.typeIn(checkoutPage.lastName, fakeData.lastName);
        await actions.typeIn(checkoutPage.zipPostalCode, fakeData.zipCode);
        await actions.clickOn(checkoutPage.continueButton);
        await actions.clickOn(checkoutPage.finishButton);
    }

    public async buyTwoItemsBackpackAndBikeLight() {
        await actions.clickOn(this.addButtonItemBikeLight)
        await this.buyOneItemBackpack()
    }

    public async addAndRemoveItemBackpackFromHomePage() {
        await actions.clickOn(this.addButtonItemBackpack);
        await actions.clickOn(this.removeButtonItemBackpack);
    }

    public async addAndRemoveItemBackpackFromItemPage() {
        await actions.clickOn(this.goToProductBackpackPage);
        await actions.clickOn(itemPage.addToCartButton);
        await actions.clickOn(itemPage.removeButton);
    }

    public async addAndRemoveItemBackpackFromCartPage() {
        await actions.clickOn(itemPage.addToCartButton);
        await actions.clickOn(this.basketIcon);
        await actions.clickOn(itemPage.removeButton)

    }
}
export default new HomePage();
