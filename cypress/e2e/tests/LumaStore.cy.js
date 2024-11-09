/// <reference types="cypress" />

import CriarContaeLogar from "../pages/CriarContaeLogar";
import PLP from "../pages/PLP";
import PDP from "../pages/PDP";
import ResultadoDeBusca from "../pages/ResultadoDeBusca";
import Home from "../pages/homepage/Home";

let termoDeBusca = ["shirt", "pants"]


context('Verificar se a Home Page carrega corretamente', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
        it('Verificar HomePage', () => {
            Home.VerificarMensagemBanner();
            Home.VerificarLogo();
            Home.VerificarBarraDeBusca();
            Home.VerificarMenu();
            Home.VerificarBannersDaPagina();
            Home.VerificarFooter();
            Home.verificarCopyright();
        })
})


context('Verificar busca por camisa', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Busca por SHIRT', () => {
        Home.SelecionarUltimaOpcao(termoDeBusca[0]);
        ResultadoDeBusca.VerificarGrid();
    })
})    


context('Verificar Adicionar produto no carrinho', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Adicionar produto no carrinho', () => {
        Home.navegarPLP('Men', 'Top');
        PLP.navegarPDP();
        PDP.adicionarProdutoNoCarrinho();
    })
})    


context('Verificar Cadastro de Usuário', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Cadastro de usuário', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
        CriarContaeLogar.CriarConta();
        CriarContaeLogar.VerificarConta();

    })
})    


context('Verificar Adicionar comentário em um produto', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Adicionar comentário', () => {
        Home.navegarPLP('Men', 'Top');
        PLP.navegarPDP();
        PDP.adicionarComentario();
    })
})

context('Verificar Checkout do Usuário', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    })
    it('Realizar Checkout', () => {
        Home.navegarPLP('Men', 'Top');
        PLP.navegarPDP();
        PDP.adicionarProdutoNoCarrinho();
        PDP.realizarCheckout();
    })
})
