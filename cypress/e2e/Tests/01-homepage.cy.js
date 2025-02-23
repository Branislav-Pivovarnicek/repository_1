describe('Home page tests',() =>{
    beforeEach(() =>{
        cy.visit('https://datacomp.sk/',{timeout: 10000});
        cy.get('#cookieConsent > div > div.cnt > div > button.btn.btn-big.btn-inv > span') .contains('Detaily a nastavenie').click();
    })


    it('TEST-01 Header is visible', () => {
        cy.get("#headercont > header > div.boxcont.logo > h1 > a") .contains("Datacomp.sk - IT experti");
    })

    it('TEST-02 Cookie bar is closed', () => {
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.hdr > h1') .contains('Nastavenie cookie').should('be.visible');
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.ftr > button.btn.btn-big.btn-inv.allow-necessary > span') .contains('Iba nutné') .should('be.visible') .click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div.modal-content.contentcont > a').click();
        cy.get('body > div.modal-popup') .should('not.exist');
    })

    it('TEST-03 Checking if sections of homepage are displayed', ()=>{
        cy.get('body > div.modal-popup.cookie.cookie-0 > div > div > div.ftr > button.btn.btn-big.btn-inv.allow-necessary > span') .contains('Iba nutné') .should('be.visible') .click();
        cy.get('body > div.modal-popup.cookie.cookie-0 > div.modal-content.contentcont > a').click();
        cy.get('body > div.modal-popup') .should('not.exist');

        // Check TOP actions section
        cy.get('#wnCarousel9 > div.hdr > p') .should('be.visible') .contains('Odporúčané TOP akcie');
        // Check 1st item in carousel
        cy.get('#tns1-item0 > div.hdr > h2 > .stiplname') .should('be.visible') .contains('Samsung QLED TV 65" QE65Q80D, 4K');
        cy.get('#tns1-item0 > div.cnt > div.img').should('exist');
        cy.get('#tns1-item0 > div.cnt > div.price').should('be.visible') .contains('839,00');
        cy.get('#tns1-item0 > div.cnt > div.tools > div.status.status-discount > .discount').should('be.visible') .contains('-7%');
        // Check 2nd item in carousel
        cy.get('#tns1-item1 > div.hdr > h2 > .stiplname') .should('be.visible') .contains('Asus VivoBook Go 15, E1504FA-NJ1104W, čierny');
        cy.get('#tns1-item1 > div.cnt > div.img').should('exist');
        cy.get('#tns1-item1 > div.cnt > div.price').should('be.visible') .contains('369,00');
        cy.get('#tns1-item1 > div.cnt > div.tools > div.status.status-discount > .discount').should('not.exist');

        //Check Notebooks section
        cy.get('#wnCarousel11 > div.hdr > p') .should('be.visible') .contains('Odporúčané Notebooky a PC');
        // Check 1st item in carousel
        cy.get('#tns2-item0 > div.hdr > h2 > .stiplname') .should('be.visible') .and('contain','DELL PowerEdge T350, 0GH6C');
        cy.get('#tns2-item0 > div.cnt > div.img') .should("exist");
        cy.get('#tns2-item0 > div.cnt > div.price').should('be.visible') .contains('1 649,00');
        cy.get('#tns2-item0 > div.cnt > div.tools > div.status.status-discount > .discount').should('exist') .and('contain','-17%');
        // Check 2nd item in carousel
        cy.get('#tns2-item1 > div.hdr > h2 > .stiplname') .should('be.visible') .contains('Dell Latitude 5540, 33J01, sivý');
        cy.get('#tns2-item1 > div.cnt > div.img') .should('exist');
        cy.get('#tns2-item1 > div.cnt > div.price') .should('be.visible') .and('contain','799,00');
        cy.get('#tns2-item1 > div.cnt > div.tools > div.status.status-discount > .discount').should('be.visible') .contains('-17%');
    })
})