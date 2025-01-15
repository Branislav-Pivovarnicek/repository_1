describe('Landing page tests',() =>{
 
    it('TEST-01 Header is visible', () => {
        cy.visit('https://datacomp.sk/',{timeout: 10000})  // Load Datacomp landing page
        cy.get("#headercont > header > div.boxcont.logo > h1 > a") .contains("Datacomp.sk - IT experti");  // Check landing page header
    })

    it('TEST-02 Cookie bar is closed', () => {
        cy.visit('https://datacomp.sk/',{timeout: 10000})
        cy.get('#cookieConsent > div > div.cnt > div > button.btn.btn-big.btn-inv > span') .contains('Detaily a nastavenie').click(); // Click to Cookies modal button for displayign options
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.hdr > h1') .contains('Nastavenie cookie').should('be.visible');  // Check modal header, if correct modal si displayed
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.ftr > button.btn.btn-big.btn-inv.allow-necessary > span') .contains('Iba nutné') .should('be.visible') .click();  // Select button and click
        cy.get('body > div.modal-popup.cookie.cookie-0 > div.modal-content.contentcont > a').click();  // Click to Close modal button
        cy.get('body > div.modal-popup') .should('not.exist');  // Check if modal is closed
    })
})