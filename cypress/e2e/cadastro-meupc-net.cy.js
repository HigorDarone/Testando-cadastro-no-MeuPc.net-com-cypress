

describe('Testando Meu Pc.net', () => {
  it('Validando cadastro', () => {
    cy.visit('https://meupc.net/')
    
//espera um segundo  para executar as funções abaixo
    cy.wait(1000)

    // clicando no botão menu pela classe '.navbar-burger'
    cy.get('.navbar-burger').click()
    
    cy.wait(1000)

    //clicando no botão de cadastro
    cy.get('ul.menu-list')//pegando a ul com a class .menu-list
    .children('li') //pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]')// pegando o filho da (li) que tem o href com o valor  //https://meupc.net/cadastro
    .click()
    
    cy.wait(1000)

    cy.get('input[name="nome"]').type('Higor teste')  // preenchendo o campo nome do cadastro com o valor 'Higor teste'
    cy.get('input[name="email"]').type('emailteste@hotmail.com')//preenchendo o campo email do cadastro com o valor 'email teste'
    cy.get('input[placeholder="Defina uma senha"]').type('senha teste')//preenchendo o campo senha do cadastro com o valor 'senha teste' pegando pela 'placeholder'
    cy.get('input[type="checkbox"]').check({force: true}) // forçando ele dar um click no checkbox de validação dos termos
    
    cy.contains('Cadastrar-se').click() //clicando no cadastrar se
    cy.contains('Escolha seu nome de usuário').should('be.visible')// para validar o teste
    

  })

  it.only('Validando login', () => {
    cy.visit('https://meupc.net/')

    cy.get('.navbar-burger').click()

    cy.wait(1000)

    cy
    .get('ul.menu-list')
    .children('li')
    .children('a[href="https://meupc.net/login"]')
    .click()

   cy
   .contains('Email ou nome de usuário')
   .siblings('input')
   .type('testecypress@tuamaraquelaursa.com')
   
   cy
   .contains('Senha')
   .siblings('span')
   .children('input')
   .type('testecypress')

   cy
   .contains('Cancelar')
   .siblings('button')
   .click()

  })
})

