import {loginStore} from "../../support/loginUtils";
import { STORE_PASS, STORE_URL} from "../../support/config";
import  productPage  from '../selector/productPage';

const PRODUCT_URL = 'products/the-3p-fulfilled-snowboard';
const CART_DRAWER_CLOSE = '#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg';
const CART_REMOVE_BUTTONS = {
  FIRST_ITEM: '#CartDrawer-Remove-1 > button',
  FOURTH_ITEM: '#CartDrawer-Remove-4'
};

describe('Frequently bought together', () => {
    let prodPage;

    beforeEach(() => {
        loginStore(STORE_URL, STORE_PASS);
        cy.visit(STORE_URL + PRODUCT_URL);
        prodPage = new productPage();
    });

    it('Check add to cart', () => {
        prodPage.clickAddToCart();
        prodPage.checkTotalValue.should('have.text', '4.505 VND');

        cy.get(CART_DRAWER_CLOSE)
          .should('be.visible')
          .click();
        
        cy.get('button')
          .contains('ITEM ADDED TO YOUR CART')
          .should('be.visible');
    });

    it('Check cart after untick product offer', () => {
        prodPage.checkBox.eq(1).click();
        prodPage.clickAddToCart();
        prodPage.checkTotalValue.should('contain.text', '3.965 VND');
    });

    it('Check cart after unticking product trigger', () => {
        prodPage.checkBox.eq(0).click();
        prodPage.clickAddToCart();
        prodPage.checkTotalValue
            .should('contain.text', '2.375 VND');
    });

    it('Check delete product offer in cart', () => {
        prodPage.clickAddToCart();
        cy.get(CART_REMOVE_BUTTONS.FIRST_ITEM).click();
        prodPage.checkTotalValue.should('contain.text', '3.582 VND');
    });

    it('Check delete product trigger in cart', () => {
        prodPage.clickAddToCart();
        cy.get(CART_REMOVE_BUTTONS.FOURTH_ITEM).click();
        prodPage.checkTotalValue.should('contain.text', '2.375 VND');
    });
});