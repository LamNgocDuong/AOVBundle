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

    it.only('Check display inline child product', () => {
        prodBundle.getInlineChildProduct()
            .should('contain.text', 'All products included in bundle')
    })
});