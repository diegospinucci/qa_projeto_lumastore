# Q.A Challenge Luma Store

- Challenge by coodesh

- Autor: Diego Spinucci Cavalcanti

Este é um desafio técnico da Coodesh utlizado para avaliar as habilidades relacionadas a automação de  testes .

Foi aplicado os conceitos de teste caixa preta, onde a página https://magento.softwaretestingboard.com foi testada em Cypress.


Neste projeto foram testados os seguintes Cenários: 

- Se a HomePage é carregada corretamente;
- Buscar por `shirt` na barra de busca, validando o retorno da ultima sugestão;
- Adicionar um produto no carrinho;
- Realizar um cadastro como usuário;
- Realizar um comentário em um produto;
- Realizar checkout;
 

# Linguagem, framework e tecnologias Utilizadas.

Neste projeto foi utlizado o framework Cypress.io em sua versão 13.15.2;
Node em sua versão 13.12.0
Casos de teste na linguagem JavaScript;
Repórter dos cenários Mochawesome Repórter;
Para gerar os dados do cadastro do cliente utilizei a API https://randomuser.me/.


- **Framework Cypress** - Além de seu tempo de execução rápido, testes em paralelo e de sua simplicidade e facilidade de uso, o Cypress possui uma sintaxe amigável e uma interface de usuário  intuitiva, além de uma excelente documentação e comunidade.

- **Por que não outra linguagem?** - O Selenium possui uma api um pouco mais complexa e uma configuração um pouco maior. Além disso, ele comunica com os navegadores externos por meio do WebDriver, pode ter tempos de execução mais lentos em comparação com o Cypress.

- O Robot Framework não é tão eficiente em termos de desempenho quanto o Cypress ou o Selenium, especialmente para testes complexos ou em larga escala.


# Como instalar e usar o projeto?

A. Após fazer o git clone deste projeto para sua máquina local, acesse o diretório do projeto e siga os seguintes passos: 

1. **Instale o Cypress**: 

    `npm install cypress --save-dev`

2. **Instale o Mochawesome Report**: 

    `npm i --save-dev cypress-mochawesome-reporter`

3. **Execute o comando no terminal**: 

    `npx cypress open`


4. **Na página de boas vindas do Cypress**: clique em 'E2E Testing'

5. Selecione o browser de sua preferência

6. Clique em 'Start E2E Testing'

7. Será aberta a aba Specs

8. Clique no caso de teste LumaStore.cy 


Você pode também rodar o projeto no modo headless

    `npx cypress run`


9. Após a execução dos cenários, será encontrado o relatório dos testes dentro da pasta:

    `qa_projeto_lumastore\mochawesome-report\mochawesome.html`

>  This is a challenge by [Coodesh](https://coodesh.com/)
