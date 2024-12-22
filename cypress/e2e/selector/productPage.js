const SELECTORS = {
    BRANDING_AOV: '.Avada-Bundle-Branding-Container',
    ADD_TO_CART: '.Avada-Offer__ButtonAddToCart',
    CHECKBOX: '.Avada-Checkbox__Wrapper',
    TOTAL_VALUE: '.totals__total-value'
};

class ProductPage {
    brandingAOVBundle() {
        return cy.get(SELECTORS.BRANDING_AOV);
    }

    addToCart() {
        return cy.get(SELECTORS.ADD_TO_CART).click();
    }

    getTotalValue() {
        return cy.get(SELECTORS.TOTAL_VALUE);
    }

    getCheckbox() {
        return cy.get(SELECTORS.CHECKBOX);
    }
}

export default ProductPage;