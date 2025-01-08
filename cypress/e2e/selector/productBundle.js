const SELECTORS = {
    ADD_TO_CART: '.product-form__buttons',
    TOTAL_VALUE: '.cart-item__price-wrapper',
    CHECK_OUT: '.cart__ctas'

}

class ProductBundle{
    addToCart(){
        return cy.get(SELECTORS.ADD_TO_CART).click();
    }
    totalValue(){
        return cy.get(SELECTORS.TOTAL_VALUE);
    }
    checkOut(){
        return cy.get(SELECTORS.CHECK_OUT).click();
    }
}
export default ProductBundle;