import actions from "../utils/actions";  
import { fakeData } from "../test-data/fakeData";

class CheckoutPage {
    public get checkoutButton() {
        return $('#checkout')
    }

    public get firstName() {
        return $('#first-name')
    }

    public get lastName() {
        return $('#last-name')
    }

    public get zipPostalCode() {
        return $('#postal-code')
    }

    public get continueButton() {
        return $('#continue')
    }

    public get finishButton() {
        return $('#finish')
    }

    public get completedOrderMessage(){
        return $('//*[.="THANK YOU FOR YOUR ORDER"]')
    }
}
export default new CheckoutPage();