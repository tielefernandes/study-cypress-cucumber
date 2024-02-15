/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor'

const jsonPath = require('jsonpath')

Then(`vou receber o retorno {string}`, (statusCodeRetorno) => {
  expect(Cypress.env('response').status).to.equal(parseInt(statusCodeRetorno))
})


Then('vou receber um JSON com valores', (table) => {

  const body = JSON.parse(JSON.stringify(Cypress.env('response').body))

  table.hashes().forEach((element) => {
    let query = jsonPath.query(body, `$..${element.JSONPath}`)

    if (query.toString().includes('[object Object]')) {
      query = JSON.stringify(query)
    } else {
      query = query.toString()
    }
    expect(query).to.equal(element.Value)
  })
})

Then('vou receber um json com o response', (dataString) => {
  const actualJsonResponse = JSON.parse(JSON.stringify(Cypress.env('response').body))

  const expectedJsonResponse = JSON.parse(dataString)

  expect(actualJsonResponse).to.deep.eq(expectedJsonResponse)
})