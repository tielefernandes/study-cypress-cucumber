

export const formatEndpoint = (endpoint, parametros) => {

  let s = endpoint

  let i = parametros.length

  while (i--) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), getValue(parametros[i]))
  }

  return s
}

export const getValue = (value) => {

  if (!value) return value

  const values = value.split(':')

  if (values.length !== 2) return value

  switch (values[0]) {
    case 'env':
      return Cypress.env(values[1])
    case 'generate':
      return generateData(values[1])
    default:
      return value
  }
}

const generateData = (type) => {
  switch (type) {
    case 'email':
      return faker.internet.email()
    case 'password':
      return faker.internet.password()
    default:
      throw new Error(`Não há implementação para o tipo de dado "${type}"!!!`)
  }
}