/// <reference types="cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor'
import { formatEndpoint } from '../utils'

Given('que o cache e storage do sistema estão limpos', () => {
	cy.clearCookies()
	cy.clearLocalStorage()
})

When(`que contenha a requisição json`, (json) => {
	const body = JSON.parse(json)
	Cypress.env('body_request', body)
	cy.log(body)
})

When(/^o usuário solicitar um "([^"]*)" no endpoint "([^"]*)"$/,
	(verboHttp, endpoint) => {
		Cypress.env('options',
			{
				method: verboHttp,
				failOnStatusCode: true,
				url: `${Cypress.env('baseUrl')}${endpoint}`,
				headers: {
					Authorization: `bearer ${Cypress.env('access_token')}`
				}
			}
		)

		if (Cypress.env('body_request') !== undefined) {
			Cypress.env('options').body = Cypress.env('body_request')
		}
		cy.log('Iniciando a requisição...')
		cy.request(Cypress.env('options')).then((response) => {
			cy.log('Requisição concluída com sucesso!');
			Cypress.env('response', response)
		})
	})

When(/^o usuário solicitar um '([^"]*)' em '([^"]*)' passando os parâmetros '([^]*)' via rota$/,
	(httpVerbo, endpoint, parametros) => {

		const array = parametros.split(',')

		Cypress.env('options',
			{
				method: httpVerbo,
				failOnStatusCode: false,
				url: `${Cypress.env('baseUrl')}${formatEndpoint(endpoint, array)}`,
				headers: {
					Authorization: `bearer ${Cypress.env('access_token')}`,
				}
			}
		)

		if (Cypress.env('body_request') !== undefined) {
			Cypress.env('options').body = Cypress.env('body_request')
		}

		cy.request(Cypress.env('options')).then((response) => {
			Cypress.env('response', response)
		})
	})