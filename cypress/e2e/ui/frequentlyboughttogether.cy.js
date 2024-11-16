import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";

describe('Check cart after adding', () => {
  it('FBT', () => {
    loginStore(STORE_URL, STORE_PASS )

    //check product show FBT
    cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()

    //check add to cart and value total price
    cy.get('.Avada-Offer__ButtonAddToCart').click()
    cy.get('.totals__total-value').should('have.text','2.934 VND')

    //close cart drawer
    cy.get('#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg')
        .click()

    // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
    cy.wait(4000);
    cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
  })
})

describe('Check untick product', () => {
  it('FBT', () => {
    loginStore(STORE_URL, STORE_PASS)
  })
})