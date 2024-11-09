import ComentarioUsuario from '../../fixtures/comentario.json'
import CheckoutUsuario from '../../fixtures/checkout.json'
import Home from './homepage/Home';

class PDP {
    adicionarProdutoNoCarrinho() {
        // Selecionar tamanho M
        cy.get('[id="option-label-size-143-item-167"]')
            .click();

        // Selecionar cor
        cy.get('[id="option-label-color-93-item-50"]')
            .click();

        // Adicionar ao carrinho
        cy.get('[id="product-addtocart-button"]')
            .click()

        // Verificar produto adicionado
        cy.get('[id="qty"]')
            .then($prop => {
                Home.VerificarNumeroDoCarrinho($prop[0].value);
            })
    }

    adicionarComentario() {
        cy.get('[id="tab-label-reviews-title"]')
            .click();

        cy.get('[id="Rating_5_label"]')
            .click({ force: true });

        cy.get('[id="nickname_field"]')
            .type(ComentarioUsuario.nickname, { delay: 100 });

        cy.get('[id="summary_field"]')
            .type(ComentarioUsuario.summary, { delay: 100 });

        cy.get('[id="review_field"]')
            .type(ComentarioUsuario.review);

        cy.get('[class="action submit primary"]')
            .click();
    }

    realizarCheckout() {
        cy.get('[class="action showcart"]')
            .click();
        cy.wait(3000)

        cy.get('#top-cart-btn-checkout')
            .click();
        cy.wait(3000)

        cy.get('#customer-email')
            .should('be.visible')    
            .click()
            .type(CheckoutUsuario.email);

        cy.get('input[name="firstname"]')
            .should('be.visible')
            .click()
            .type(CheckoutUsuario.firstName, { delay: 100 });
    
        cy.get('input[name="lastname"]')
            .should('be.visible')
            .click()
            .type(CheckoutUsuario.lastName, { delay: 100 });
    

        cy.get('input[name="street[0]"]')
            .should('be.visible')
            .click()    
            .type(CheckoutUsuario.streetAddress, { delay: 100 });
    
        cy.get('input[name="city"]')
            .should('be.visible')
            .click()    
            .type(CheckoutUsuario.city, { delay: 100 });

        cy.get('select[name="region_id"]')
            .should('be.visible')
            .select('Michigan')

        cy.get('input[name="postcode"]')
            .should('be.visible')
            .click()    
            .type(CheckoutUsuario.zip, { delay: 100 });
    
        cy.get('input[name="telephone"]')
            .should('be.visible')
            .click()
            .type(CheckoutUsuario.phone, { delay: 100 });

        cy.get('input[type="radio"][value="tablerate_bestway"]')
            .check();

        cy.get('.button.action.continue.primary')
            .click();

        cy.get('.action.primary.checkout')
            .click();
        
        cy.get('.checkout-onepage-success.page-layout-1column')
        .should('be.visible');
    }
}

export default new PDP();