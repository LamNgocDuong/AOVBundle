import {loginStore} from "../../support/loginUtils";
import {STORE_URL} from "../../support/config";

describe('Product fixed bundle', () => {
    beforeEach(() => {
        loginStore(STORE_URL, STORE_URL);
        cy.visit(STORE_URL + "products/product-fixed-bundle-2");
    })
    it('Check display inline bundle', () => {

    })
});