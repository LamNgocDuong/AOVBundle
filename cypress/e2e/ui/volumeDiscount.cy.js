import {loginStore} from "../../support/loginUtils";
import {STORE_PASS, STORE_URL} from "../../support/config";
import ProductPage from '../selector/productPage';

const TEST_CONFIG = {
    URLS: {
        PRODUCT1: 'products/the-complete-snowboard'
    },
    VOLUME_TITLE: 'Avada-VolumeTitle'
}
const prodPage = new ProductPage();

describe('Frequently bought together', () => {

    beforeEach(() => {
        loginStore(STORE_URL, STORE_PASS);
        cy.visit(STORE_URL + PRODUCT_URL);
    })
    describe('Volume table with trigger = specific product', () => {
        it('Check display inline table volume discount' , () => {
            cy.visit(TEST_CONFIG.URLS.PRODUCT1)
        })
    })
})