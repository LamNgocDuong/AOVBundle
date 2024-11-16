/**
 *
 * @param url
 * @param password
 * @constructor
 */
export function loginStore(url, password = '1') {
    cy.visit(url)

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').click();

    cy.url().should('include', url);

}