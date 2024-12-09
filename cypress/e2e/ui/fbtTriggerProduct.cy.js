import {loginStore} from "../../support/loginUtils";
import { STORE_PASS, STORE_URL} from "../../support/config";
import  productPage  from '../selector/productPage';

const closeCartDrawn = '#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg'

describe('Frequently bought together', () => {

    beforeEach(() =>{
        loginStore(STORE_URL, STORE_PASS)
        cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard')
    })

    it('Check add to cart', () => {

        //check add to cart and value total price
        let prodPage = new productPage()
            prodPage.clickAddToCart
            prodPage.checkTotalValue.should('have.text', '4.505 VND')

        //close cart drawer
        cy.get(closeCartDrawn).should('be.visible').click()

        // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
        cy.get('button').contains('ITEM ADDED TO YOUR CART')
            .should('be.visible');
    })


    it('Check cart after untick product offer', () => {

        //untick product offer
        let prodPage = new productPage()
            prodPage.checkBox.eq(1).click()
            prodPage.clickAddToCart
            prodPage.checkTotalValue.should('contain.text', '3.965 VND')
    })

    it('Check cart after unticking product trigger', () => {

        //untick product trigger
        let prodPage = new productPage()
            prodPage.checkBox.eq(0).click()
            prodPage.clickAddToCart
            prodPage.checkTotalValue
                .should('contain.text', '2.375 VND')
    })

    it('Check delete product offer in cart', () => {

        let prodPage = new productPage()
            prodPage.clickAddToCart
        // delete product
        cy.get('#CartDrawer-Remove-1 > button').click()
            prodPage.checkTotalValue.should('contain.text', '3.582 VND')
    })

    it('Check delete product trigger in cart', () => {

        let prodPage = new productPage()
            prodPage.clickAddToCart
        // delete product
        cy.get('#CartDrawer-Remove-4').click()
            prodPage.checkTotalValue.should('contain.text', '2.375 VND')
    })

})