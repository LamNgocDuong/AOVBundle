import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";
import ProductPage from '../selector/productPage';

const TEST_CONFIG = {
    URLS: {
        PRODUCT1: 'products/the-complete-snowboard'
    }
}
const productPage = new ProductPage();

describe('Volume Discount Tests', () => {

    before(() => {
        loginStore(STORE_URL, STORE_PASS);
    })
    describe('Volume discount table for specific product', () => {
        beforeEach(() => {
            cy.visit(`${STORE_URL}${TEST_CONFIG.URLS.PRODUCT1}`);
        })
        it('should display volume discount table with correct title', () => {
            productPage.getVolumeTitle()
                .should('be.visible')
                .and('contain.text', 'Get more, save more');
        })
        it.only('Select variant and add product to cart', () => {
            productPage.getVariantPopupTrigger()
        })
    })
})