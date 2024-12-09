export const BRANDING_AOV = '.Avada-Bundle-Branding-Container'
export const ADDTOCART = '.Avada-Offer__ButtonAddToCart ';
export const CHECK_BOX = ".Avada-Checkbox__Wrapper"
export const TOTAL_VALUE = ".totals__total-value"

class productPage {
    get brandingAOVBundle() {
        return cy.get(BRANDING_AOV)
    }
    get clickAddToCart() {
        return cy.get(ADDTOCART).click()
    }
    get checkTotalValue() {
        return cy.get(TOTAL_VALUE)
    }
    get checkBox() {
        return cy.get(CHECK_BOX)
    }

}
module.exports = productPage;