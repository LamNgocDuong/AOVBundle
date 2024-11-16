import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";

describe('Frequently Bought Together', () => {
  it('FBT', () => {
    loginStore(STORE_URL, STORE_PASS )

    //check product show FBT
    cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()

    //check add to cart and value total price
    cy.get('.Avada-Offer__ButtonAddToCart').click()
    cy.get('.totals__total-value').should('have.text','2.934 VND')

  })
})