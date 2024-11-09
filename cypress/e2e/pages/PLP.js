
class PLP {
    VerificarBreadCrumbs(category, subcategory) {
        cy.get('[class="breadcrumbs"]')
            .should('contain', category)
            .and('contain', subcategory);
    }

    navegarPDP() {
        cy.get('[class="item product product-item"]')
            .first()
            .click();
    }
}

export default new PLP();