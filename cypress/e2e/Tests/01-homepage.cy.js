describe('Home page tests',() =>{
 
    it('TEST-01 Header is visible', () => {
        cy.visit('https://datacomp.sk/',{timeout: 10000})
        cy.get("#headercont > header > div.boxcont.logo > h1 > a") .contains("Datacomp.sk - IT experti");
    })

    it('TEST-02 Cookie bar is closed', () => {
        cy.visit('https://datacomp.sk/',{timeout: 10000})
        cy.get('#cookieConsent > div > div.cnt > div > button.btn.btn-big.btn-inv > span') .contains('Detaily a nastavenie').click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.hdr > h1') .contains('Nastavenie cookie').should('be.visible');
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.ftr > button.btn.btn-big.btn-inv.allow-necessary > span') .contains('Iba nutné') .should('be.visible') .click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div.modal-content.contentcont > a').click();
        cy.get('body > div.modal-popup') .should('not.exist');
})