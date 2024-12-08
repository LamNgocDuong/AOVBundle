import {loginStore} from "../../support/loginUtils";
import { STORE_PASS, STORE_URL} from "../../support/config";

const closeCartDrawn = '#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg'

describe('Frequently bought together', () => {
  it('Check display inline frequently bought together with trigger condition is specific product', () => {
    loginStore(STORE_URL, STORE_PASS)
    // Visit product page
    cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');

    let prodPage1 = new productPage1()
      prodPage1.brandingAOVBundle.should('have.class', 'active')
  });

  it('Check add to cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');
      //check add to cart and value total price
      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue.should('have.text', '3.455 VND')

      //close cart drawer
      cy.get(closeCartDrawn).click()

      // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
      cy.get('button').contains('ITEM ADDED TO YOUR CART')
          .should('be.visible');
  })


  it('Check cart after untick product offer', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');
      //untick product offer
      let prodPage1 = new prodcuctPage1()
      prodPage1.checkBox.eq(1).click()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue.should('have.text', '3.965 VND')
    })

  it('Check cart after unticking product trigger', () => {
      loginStore(STORE_URL, STORE_PASS)
      ccy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');
      //untick product trigger
      let prodPage1 = new prodcuctPage1()
      prodPage1.checkBox.eq(1).click()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue
          .should('have.text', '2.375 VND')
    })

  it('Check delete product offer in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');

      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      // delete product
      cy.get('#CartDrawer-Remove-2').click()
      prodPage1.checkTotalValue
          .should('have.text', '3.582 VND')
    })

  it('Check delete product trigger in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');

      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      // delete product
      cy.get('#CartDrawer-Remove-1').click()
      prodPage1.checkTotalValue
          .should('have.text', '2.375 VND')
    })

  it('Check display inline frequently bought together with trigger condition is specific collection', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-archived-snowboard');
      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue.should('have.text', '1.425 VND')

      //close cart drawer
      cy.get(closeCartDrawn).click()

      // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
      cy.wait(4000);
      cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
    });

  it('Check untick product offer', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-archived-snowboard');
      let prodPage1 = new prodcuctPage1()
      prodPage1.checkBox.eq(1).click()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue.should('have.text', '630 VND')
    })

  it('Check untick product trigger', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-archived-snowboard');
      let prodPage1 = new prodcuctPage1()
      prodPage1.checkBox.eq(0).click()
      prodPage1.clickAddToCart
      prodPage1.checkTotalValue.should('have.text', '1.025 VND')
    })

  it('Check delete product offer in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-archived-snowboard');
      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      cy.get('#CartDrawer-Remove-1').click()
      prodPage1.checkTotalValue.should('have.text', '630 VND')
    })

  it('Check delete product trigger in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-archived-snowboard');
      let prodPage1 = new prodcuctPage1()
      prodPage1.clickAddToCart
      cy.get('#CartDrawer-Remove-2').click()
      prodPage1.checkTotalValue.should('have.text', '1.025 VND')
    })
})