/// <reference types="cypress" />

import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que o usuário esteja autenticado e tenha as claims`, (table) => {
	const claimsAuthentication = {}
	table.hashes().forEach((element) => {
		claimsAuthentication[element.Tipo] = element.Valor
	})
	cy.request({
		method: 'POST',
		url: 'url',
		form: true,
		failOnStatusCode: true,
		body: claimsAuthentication,
	}).then(response => {
		expect(response.status).to.eq(200);
		Cypress.env('access_token', response.body.access_token)
	})
})

Given(`que o usuário não esteja autenticado`, () => {
  Cypress.env('access_token', null)
})
