import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";

describe('Frequently bought together', () => {
  it('Check display inline frequently bought together', () => {
    loginStore(STORE_URL, STORE_PASS)
    // Visit product page
    cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');

    // Check class visibility
    cy.get('.Avada-Bundle-Branding-Container')
        // Cuộn đến phần tử
        .scrollIntoView()
        .then(($element) => {
          // Kiểm tra xem phần tử có tồn tại không
          if ($element.length > 0) {
            cy.log('AOV-Branding tồn tại');
            console.log('AOV-Branding tồn tại');

            // Kiểm tra phần tử có hiển thị
            cy.wrap($element).should('be.visible');
            cy.log('Class Avada-Bundle-Branding-Container đang hiển thị');
            console.log('Class Avada-Bundle-Branding-Container đang hiển thị');
          } else {
            // In ra console nếu phần tử không tồn tại
            cy.log('Class Avada-Bundle-Branding-Container không tồn tại');
            console.log('Class Avada-Bundle-Branding-Container không tồn tại');
          }
        });
  });


  it('Check item add to cart', () => {
    loginStore(STORE_URL, STORE_PASS)

    //check product show FBT
    cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()

    //check add to cart and value total price
    cy.get('.Avada-Offer__ButtonAddToCart').click()
    cy.get('.totals__total-value').should('have.text', '2.934 VND')

    //close cart drawer
    cy.get('#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg')
        .click()

    // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
    cy.wait(4000);
    cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
  })


  it('Check cart after unticking product offer', () => {
    loginStore(STORE_URL, STORE_PASS)
    cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()
    //untick product offer
    cy.get('#shopify-block-aov_bundle_upsell_offer_inline_RUaeyp > div > div > div > div > div > div > div.Avada-Fbt__WrapProductFooter > div.Avada-Fbt__ProductList > div:nth-child(2) > div.Avada-OfferItem__Checkbox > div > div')
        .click()
    cy.get('.Avada-Offer__ButtonAddToCart').click()
    cy.get('.totals__total-value').should('have.text', '2.630 VND')
  })

  it('Check cart after unticking product trigger', () => {
    loginStore(STORE_URL, STORE_PASS)
    cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()
    //untick product trigger
    cy.get('#shopify-block-aov_bundle_upsell_offer_inline_RUaeyp > div > div > div > div > div > div > div.Avada-Fbt__WrapProductFooter > div.Avada-Fbt__ProductList > div:nth-child(1) > div.Avada-OfferItem__Checkbox > div')
        .click()
    cy.get('.Avada-Offer__ButtonAddToCart').click()
    cy.get('.totals__total-value').should('have.text', '630 VND')

  })
})