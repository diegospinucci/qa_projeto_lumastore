class ResultadoDeBusca {
    VerificarBreadCrumb(termoDeBusca) {
        cy.get('[data-ui-id="page-title-wrapper"]')
            .should('contain', termoDeBusca);

        cy.get('[class="item search"]')
            .should('contain', termoDeBusca)
    }

    VerificarGrid() {
        cy.get('[class="item product product-item"]')
            .should('be.visible');
    }
}

export default new ResultadoDeBusca();