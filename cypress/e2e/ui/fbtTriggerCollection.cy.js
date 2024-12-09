import {loginStore} from "../../support/loginUtils";
import { STORE_PASS, STORE_URL} from "../../support/config";
import productPage from '../selector/productPage';

const closeCartDrawn = '#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg'

describe('Frequently bought together', () => {

    beforeEach(() =>{
        loginStore(STORE_URL, STORE_PASS)
        cy.visit(STORE_URL + 'products/the-archived-snowboard');
    })

    it('Check display inline frequently bought together with trigger condition is specific collection', () => {

       let prodPage = new productPage()
           prodPage.clickAddToCart
           prodPage.checkTotalValue.should('have.text', '1.455 VND')

        //close cart drawer
        cy.get(closeCartDrawn).click()

        // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
        cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
    });

    it('Check untick product offer', () => {
       let prodPage = new productPage()
           prodPage.checkBox.eq(1).click()
           prodPage.clickAddToCart
           prodPage.checkTotalValue.should('have.text', '630 VND')
    })

    it('Check untick product trigger', () => {
       let prodPage = new productPage()
           prodPage.checkBox.eq(0).click()
           prodPage.clickAddToCart
           prodPage.checkTotalValue.should('have.text', '1.025 VND')
    })

    it('Check delete product offer in cart', () => {
       let prodPage = new productPage()
           prodPage.clickAddToCart
       cy.get('#CartDrawer-Remove-1').click()
           prodPage.checkTotalValue.should('have.text', '630 VND')
    })

    it('Check delete product trigger in cart', () => {
       let prodPage = new productPage()
           prodPage.clickAddToCart
       cy.get('#CartDrawer-Remove-2').click()
           prodPage.checkTotalValue.should('have.text', '1.025 VND')
    })
})