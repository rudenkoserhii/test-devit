/// <reference types="cypress" />

describe('responses app', () => {
  beforeEach(() => {
    cy.wait(5000);

    cy.visit('http://localhost:3000/');
  });

  it('displays no responses items by default', () => {
    cy.get('.ant-list div').should('have.length', 0);
  });

  it('can input number', () => {
    cy.get('.input-one__button').should('have.attr', 'disabled', 'disabled');

    cy.get('.ant-input')
      .type(2)
      .should('have.value', 2);

    cy.get('.input-one__button').should('not.have.attr', 'disabled');

    cy.get('.input-one__button').click();

    cy.get('.ant-input').should('have.value', '');
  });

  it('responses after start are present', () => {
    cy.get('.ant-input').type(2);

    cy.get('.input-one__button').click();

    cy.wait(7000);

    cy.get('.ant-list .response').should('have.length', 100);
  });
});
