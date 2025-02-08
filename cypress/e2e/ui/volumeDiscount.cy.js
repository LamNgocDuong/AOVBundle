import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";
import ProductPage from '../selector/productPage';

const TEST_CONFIG = {
    URLS: {
        PRODUCT1: 'products/the-complete-snowboard'
    },
    SELECTORS: {
        BUTTON_BEFORE_ADD_TO_CART: '.Avada-Offer__ButtonAddToCartDone'
    },
    EXPECTED_VALUES: {
        VOLUME_TITLE: 'Get more, save more',
        BUTTON_BEFORE_ADD_TO_CART: 'ITEM ADDED TO YOUR CART'
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
                .and('contain.text', TEST_CONFIG.EXPECTED_VALUES.VOLUME_TITLE);
        })
        it.only('Select variant and add product default tier to cart', () => {
            cy.wrap(productPage)
                .then((page) => {
                    page.getVariantPopupTriggerByIndex(1);
                    page.selectVariantByText('Bzone');
                    page.selectVariantByText('S');
                    page.confirmVariantVolume();
                    page.getVariantPopupTriggerByIndex(2);
                    page.selectVariantByText('Coral');
                    page.selectVariantByText('XXXL');
                    page.confirmVariantVolume();
                    page.getVariantPopupTriggerByIndex(3);
                    page.selectVariantByText('Grey');
                    page.selectVariantByText('L');
                    page.confirmVariantVolume();
                    page.addToCart();
                    cy.get(TEST_CONFIG.SELECTORS.BUTTON_BEFORE_ADD_TO_CART)
                        .should('be.visible')
                        .and('contain.text', TEST_CONFIG.EXPECTED_VALUES.BUTTON_BEFORE_ADD_TO_CART);
                })
        })
    })
})