import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";
import ProductBundle from '../selector/productBundle';

const BUNDLE_NAME = '.product__title';
const prodBundle = new ProductBundle();

describe('Product fixed bundle', () => {
    beforeEach(() => {
        loginStore(STORE_URL, STORE_PASS);
        cy.visit(STORE_URL + "products/product-fixed-bundle-2");
    })
    it('Check product name', () => {
        cy.get(BUNDLE_NAME)
            .should('contain.text', 'Product fixed bundle #1');
    })

    it('Check add to cart and price bundle', () => {
        prodBundle.addToCart();
        prodBundle.totalValue().should('have.text','3.260 VND');
    })

    it('Change variant and verify price product bundle', () => {
        prodBundle.selectVariant(1, 2);
        prodBundle.addToCart();
        prodBundle.totalValue().should('have.text','3.430 VND');
    })

    it('Check display variant in cart', () => {
        prodBundle.selectVariant(0, 1); 
        prodBundle.selectVariant(1, 2); 
        prodBundle.addToCart();

        // Verify variants in cart
        prodBundle.getCartVariants().then(variants => {
            cy.log('Variants found:', variants);

            // Verify từng cặp dt-dd
            variants.forEach(variant => {
                if (variant.dt.includes('The Archived Snowboard (Color):')) {
                    expect(variant.dd).to.equal('Bzone,');
                }
                if (variant.dt.includes('The Archived Snowboard (Size):')) {
                    expect(variant.dd).to.equal('S');
                }
            });
        });
        prodBundle.totalValue().should('have.text','3.260 VND')
    })

    it('Check checkout bundle process', () => {
        prodBundle.selectVariant(0, 1); 
        prodBundle.selectVariant(1, 2); 
        prodBundle.addToCart();
        prodBundle.checkOut();
        
        // Add assertions for checkout page
        cy.url().should('include', '/checkout');
        
        // Verify bundle items are present in checkout
        cy.get('#app > div:nth-child(1) > div > div.cm5pp.U3Rye.FeQiM.oYrwu._1fragemna._1fragemn6._1fragemt0 > div.Sxi8I > div.i4DWM._1fragemna._1fragemn7._1fragemt0 > div > aside > div > section > div > div:nth-child(2) > section > div._6zbcq54._6zbcq53._1fragem28._1fragemnn._6zbcq5m._6zbcq5a._1fragem3w._6zbcq5s > div._6zbcq513._6zbcq512._1fragem28._1fragemnn._6zbcq5m._6zbcq5a._1fragem3w > div > div:nth-child(4) > div > span')
            .should('have.text','₫3,260');
        cy.get('#collapsed-components > div > div > div:nth-child(1) > div._6zbcq51n._6zbcq51m._1fragem28._1fragemnn._6zbcq51i._6zbcq51f._1fragem6t._6zbcq51c._6zbcq51k._1fragemnq > span._19gi7yt0._19gi7ytu._19gi7ytt._1fragemnv._19gi7ytj')
            .should('have.text','Bzone / S')
    })
});