describe('Home page tests',() =>{
    beforeEach(() =>{
        cy.visit('https://datacomp.sk/',{timeout: 10000});
        cy.get('#cookieConsent > div > div.cnt > div > button.btn.btn-big.btn-inv > span') .contains('Detaily a nastavenie').click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.hdr > h1') .contains('Nastavenie cookie').should('be.visible');
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.ftr > button.btn.btn-big.btn-inv.allow-necessary > span') .contains('Iba nutné') .should('be.visible') .click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div.modal-content.contentcont > a').click();
        cy.get('body > div.modal-popup') .should('not.exist');
    })


    it('TEST-01 Header is visible', () => {
        cy.get("#headercont > header > div.boxcont.logo > h1 > a") .contains("Datacomp.sk - IT experti");
    })

    it('TEST-02 Checking if sections of homepage are displayed', ()=>{

        // Check TOP actions section
        cy.get('#wnCarousel9 > div.hdr > p') .should('be.visible') .contains('Odporúčané TOP akcie');
        // Check 1st item in carousel
        cy.get('#tns1-item0 > div.hdr > h2 > .stiplname') .should('be.visible');
        cy.get('#tns1-item0 > div.cnt > div.img').should('exist');
        cy.get('#tns1-item0 > div.cnt > div.price').should('be.visible');
        // Check 2nd item in carousel
        cy.get('#tns1-item1 > div.hdr > h2 > .stiplname') .should('be.visible');
        cy.get('#tns1-item1 > div.cnt > div.img').should('exist');
        cy.get('#tns1-item1 > div.cnt > div.price').should('be.visible');

        //Check Notebooks section
        cy.get('#wnCarousel11 > div.hdr > p') .should('be.visible') .contains('Odporúčané Notebooky a PC');
        // Check 1st item in carousel
        cy.get('#tns2-item0 > div.hdr > h2 > .stiplname') .should('be.visible');
        cy.get('#tns2-item0 > div.cnt > div.img') .should("exist");
        cy.get('#tns2-item0 > div.cnt > div.price').should('be.visible');
        // Check 2nd item in carousel
        cy.get('#tns2-item1 > div.hdr > h2 > .stiplname') .should('be.visible');
        cy.get('#tns2-item1 > div.cnt > div.img') .should('exist');
        cy.get('#tns2-item1 > div.cnt > div.price') .should('be.visible');
    })
})