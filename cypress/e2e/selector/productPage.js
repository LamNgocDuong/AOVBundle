const SELECTORS = {
    BRANDING_AOV: '.Avada-Bundle-Branding-Container',
    ADD_TO_CART: '.Avada-Offer__ButtonAddToCart ',
    CHECKBOX: '.Avada-Checkbox__Wrapper',
    TOTAL_VALUE: '.totals__total-value',
    VOLUME_TITLE: '.Avada-VolumeTitle',
    VARIANT_POPUP_TRIGGER: '.Avada-Offer__VariantPopupTrigger',
    VARIANT_OPTION: '.Avada-VariantOptionValue',
    CONFIRM_VARIANT_VOLUME: '.Avada-ConfirmButton'
};

class ProductPage {
    brandingAOVBundle() {
        return cy.get(SELECTORS.BRANDING_AOV);
    }

    addToCart() {
        return cy.get(SELECTORS.ADD_TO_CART).click();
    }

    totalValue() {
        return cy.get(SELECTORS.TOTAL_VALUE);
    }

    checkBox() {
        return cy.get(SELECTORS.CHECKBOX);
    }

    getVolumeTitle() {
        return cy.get(SELECTORS.VOLUME_TITLE)
            .scrollIntoView()
            .should('be.visible');
    }

    getVariantPopupTriggerByIndex(index) {
        return cy.get(SELECTORS.VARIANT_POPUP_TRIGGER)
            .eq(index)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    // Chọn variant theo text
    selectVariantByText(variantText) {
        return cy.get(SELECTORS.VARIANT_OPTION)
            .contains(variantText)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    confirmVariantVolume() {
        return cy.get(SELECTORS.CONFIRM_VARIANT_VOLUME)
            .scrollIntoView()
            .should('be.visible')
            .click();
    }
     
}

export default ProductPage;