/// <reference types = "cypress"/>

describe('Testes automatizados - API', () => {
    it('Buscar objeto por ID', () => {
        cy.request('GET', 'https://api.restful-api.dev/objects', {})
          .then((response) => {
            expect(response.status).to.equal(200)
          })
    })
})