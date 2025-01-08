import {loginStore} from "../../support/loginUtils";
import {STORE_URL} from "../../support/config";
import ProductBundle from '../selector/productBundle';


const BUNDLE_NAME = '.product__title';
const prodBundle = new ProductBundle();

describe('Product fixed bundle', () => {
    beforeEach(() => {
        loginStore(STORE_URL, STORE_URL);
        cy.visit(STORE_URL + "products/product-fixed-bundle-2");
    })
    it('Check product name', () => {
        prodBundle.BUNDLE_NAME.should('have.text', 'Product Bundle');
    })

    it('Check add to cart', () => {
        prodBundles
    })

    it('Check price product bundle', () => {
        prodBundle
    })

    it('Check check out bundle', () => {
        prodBundle
    })

    it('Change variant and price product bundle', () => {
        prodBundle
    })
});