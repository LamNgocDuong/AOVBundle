import {loginStore} from "../../support/loginUtils";
import { STORE_PASS, STORE_URL} from "../../support/config";
import productPage from '../selector/productPage';

const PRODUCT_URL = 'products/the-archived-snowboard';
const CART_DRAWER_CLOSE = '#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg';
const CART_REMOVE_BUTTONS = {
  FIRST_ITEM: '#CartDrawer-Remove-1',
  SECOND_ITEM: '#CartDrawer-Remove-2'
};

describe('Frequently bought together', () => {
    let prodPage;

    beforeEach(() => {
        loginStore(STORE_URL, STORE_PASS);
        cy.visit(STORE_URL + PRODUCT_URL);
        prodPage = new productPage();
    });

    it('Check display inline frequently bought together with trigger condition is specific collection', () => {
        prodPage.addToCart();
        prodPage.totalValue().should('have.text', '1.455 VND');

        cy.get(CART_DRAWER_CLOSE).click();
        cy.get('button')
          .contains('ITEM ADDED TO YOUR CART')
          .should('be.visible');
    });

    it('Check untick product offer', () => {
       prodPage.checkBox().eq(1).click()
       prodPage.addToCart()
       prodPage.totalValue().should('have.text', '630 VND')
    })

    it('Check untick product trigger', () => {
       prodPage.checkBox().eq(0).click()
       prodPage.addToCart()
       prodPage.totalValue().should('have.text', '1.025 VND')
    })

    it('Check delete product offer in cart', () => {
       prodPage.addToCart()
       cy.get(CART_REMOVE_BUTTONS.FIRST_ITEM).click()
           prodPage.totalValue().should('have.text', '630 VND')
    })

    it('Check delete product trigger in cart', () => {
       prodPage.addToCart()
       cy.get(CART_REMOVE_BUTTONS.SECOND_ITEM).click()
           prodPage.totalValue().should('have.text', '1.025 VND')
    })
})