const SELECTORS = {
    ADD_TO_CART: '.product-form__submit',
    TOTAL_VALUE: '.totals__total-value',
    CHECK_OUT: '.cart__ctas',
    VARIANT_OPTIONS: '#variant-selects-template--16350354145357__main fieldset',
    CART_ITEM_VARIANT: '.cart-item__details .product-option',
    CART_ITEMS: '.cart-items',
}

class ProductBundle {
    addToCart() {
        return cy.get(SELECTORS.ADD_TO_CART).click();
    }

    totalValue() {
        return cy.get(SELECTORS.TOTAL_VALUE);
    }

    checkOut() {
        return cy.get(SELECTORS.CHECK_OUT).click();
    }

    selectVariant(optionIndex, valueIndex) {
        cy.get(SELECTORS.VARIANT_OPTIONS)
            .eq(optionIndex)
            .find('label')
            .eq(valueIndex)
            .click();
    }

    getCartVariants() {
        return cy.get(SELECTORS.CART_ITEM_VARIANT).then($variants => {
            const variants = [];
            $variants.each((_, element) => {
                const dt = Cypress.$(element).find('dt').text().trim();
                const dd = Cypress.$(element).find('dd').text().trim();
                variants.push({ dt, dd });
            });
            return variants;
        });
    }

}

export default ProductBundle;