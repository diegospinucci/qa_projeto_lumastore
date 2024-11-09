import mensagemBanner from '../../../fixtures/mensagemBanner.json';
import logo from '../../../fixtures/logo.json';
import barra from '../../../fixtures/barraDeBusca.json'
import baners from '../../../fixtures/banners.json';
import copyright from '../../../fixtures/copyright.json';
import footerLinks from '../../../fixtures/footerLinks.json';
import ResultadoDeBusca from '../ResultadoDeBusca';
import PLP from '../PLP';


class Home {

    VerificarMensagemBanner() {
        cy.get('[class="message global demo"]')
            .should('be.visible')
            .and('contain', mensagemBanner.message);
    }

    VerificarLogo() {
        cy.get('.logo')
            .should('be.visible')
            .find('img').then($prop => {
                cy.wrap($prop[0].currentSrc).should('contain', logo.src)
            })
    }

    VerificarBarraDeBusca() {
        cy.get('[id="search"]')
            .should('be.visible')
            .invoke('attr', 'placeholder')
            .should('eq', barra.placeholder)
    }

    VerificarMenu() {
        var navMenuItems = ["What's New", "Women", "Men", "Gear", "Training", "Sale"]
        navMenuItems.forEach((item, index) => {
            cy.get(`[id="ui-id-${index + 3}"]`)
                .then($itemProp => {
                    cy.wrap($itemProp[0].innerText).should('eq', item)
                })
        })
    }

    VerificarBannersDaPagina() {
        baners.forEach((banner, index) => {
            cy.get('.block-promo')
                .eq(index)
                .should('have.attr', 'href', banner.href)
                .find('img')
                .should('have.attr', 'src', banner.imgSrc);
        })
    }

    VerificarFooter() {
        footerLinks.forEach((element, index) => {
            cy.get('[class="page-footer"]')
                .should('be.visible')
                .contains(element.label).then(($Prop) => {
                    expect($Prop[0].href).to.be.eq(element.href)
                })
        })
    }

    verificarCopyright() {
        cy.get('[class="copyright"]')
            .should('contain', copyright.message);
    }

    SelecionarUltimaOpcao(term) {

        cy.get('[id="search"]')
            .click()
            .clear()
            .type(`${term}`, { delay: 1500 })

        cy.get('[id="search_autocomplete"]')
            .find('[role="option"]')
            .last()
            .as('lastOption')
            .find('span')
            .then($optionProp => {
                cy.get('@lastOption')
                    .click()

                var termoBusca = $optionProp[0].innerText
                ResultadoDeBusca.VerificarBreadCrumb(termoBusca)
            })
    }

    navegarPLP(category, subcategory) {
        cy.get('[id="store.menu"]')
            .contains(category)
            .parents('li')
            .contains(subcategory)
            .click({ force: true });

        PLP.VerificarBreadCrumbs(category, subcategory);
    }

    VerificarNumeroDoCarrinho(qty) {
        cy.get('[class="counter-number"]')
            .should('contain', qty)
    }

}

export default new Home();