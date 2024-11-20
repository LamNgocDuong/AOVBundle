import {loginStore} from "../../support/loginUtils";
import {ADDTOCART, CHECK_BOX, REMOVE_PRODUCT, STORE_PASS, STORE_URL, TOTAL_VALUE} from "../../support/config";

describe('Frequently bought together', () => {
  it('Check display inline frequently bought together with trigger condition is specific product', () => {
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
        })
  });


  it('Check add to cart', () => {
      loginStore(STORE_URL, STORE_PASS)

      //check product show FBT
      cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()

      //check add to cart and value total price
      cy.get(ADDTOCART).click()
      cy.wait(4000)
      cy.get(TOTAL_VALUE).should('have.text', '3.455 VND')

      //close cart drawer
      cy.get('#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg')
          .click()

      // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
      cy.wait(4000);
      cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
    })


  it('Check cart after untick product offer', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()
      //untick product offer
      cy.get(CHECK_BOX).eq(1).click()
      cy.get(ADDTOCART).click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '2.630 VND')
    })

  it('Check cart after unticking product trigger', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.get('#Slide-template--16350353981517__featured-collection-1 > div > div').click()
      //untick product trigger
      cy.get(CHECK_BOX).eq(0).click()
      cy.get(ADDTOCART).click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '1.025 VND')
    })

  it('Check delete product offer in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');
      //check add to cart and value total price
      cy.get(ADDTOCART).click()
      // delete product
      cy.get('#CartDrawer-Remove-1 > button').click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '2.630 VND')
    })

  it('Check delete product trigger in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-3p-fulfilled-snowboard');
      //check add to cart and value total price
      cy.get(ADDTOCART).click()
      // delete product
      cy.wait(4000);
      cy.get('#CartDrawer-Remove-2 > button').click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '1.025 VND')
    })

  it('Check display inline frequently bought together with trigger condition is specific collection', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-collection-snowboard-hydrogen');
      cy.wait(2000)
      cy.get(ADDTOCART).click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '1.425 VND')

      //close cart drawer
      cy.get('#CartDrawer > div.drawer__inner.gradient.color-scheme-1 > div.drawer__header > button > span > svg')
          .click()

      // After clicking, check that the text changes to "ITEM ADDED TO YOUR CART"
      cy.wait(4000);
      cy.get('button').contains('ITEM ADDED TO YOUR CART').should('be.visible');
    });

  it('Check untick product offer', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-collection-snowboard-hydrogen');
      cy.wait(2000)
      cy.get(CHECK_BOX).eq(1).click()
      cy.get(ADDTOCART).click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '600 VND')
    })

  it('Check untick product trigger', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-collection-snowboard-hydrogen');
      cy.wait(2000)
      cy.get(CHECK_BOX).eq(0).click()
      cy.get(ADDTOCART).click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '1.025 VND')
    })

  it('Check delete product offer in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-collection-snowboard-hydrogen');
      cy.get(ADDTOCART).click()
      cy.get('#CartDrawer-Remove-1 > button').click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '600 VND')
    })

  it('Check delete product trigger in cart', () => {
      loginStore(STORE_URL, STORE_PASS)
      cy.visit(STORE_URL + 'products/the-collection-snowboard-hydrogen');
      cy.get(ADDTOCART).click()
      cy.get('#CartDrawer-Remove-2 > button').click()
      cy.wait(4000);
      cy.get(TOTAL_VALUE).should('have.text', '1.025 VND')
    })
})