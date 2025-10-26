# API Test Automation Framework

A test automation framework for API testing using Cypress and Cucumber with Gherkin syntax.

## 🎯 Purpose

This project provides an infrastructure for API testing using modern testing tools and practices. It's designed to:
- Execute automated API tests using Cypress
- Write tests in BDD format using Cucumber and Gherkin syntax
- Support JSON response validation
- Handle authentication flows
- Process dynamic data generation

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) - Modern web testing framework
- [Cucumber](https://cucumber.io/) - BDD test automation framework
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - Cucumber integration for Cypress
- [JsonPath](https://www.npmjs.com/package/jsonpath) - JSON query language
- [Faker](https://www.npmjs.com/package/@faker-js/faker) - Generate realistic test data

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run tests:
- Open Cypress Test Runner:
```bash
npm run cy:open
```
- Run tests in headless mode:
```bash
npm run test
```

## 📁 Project Structure

```
├── cypress/
│   ├── fixtures/          # Test data files
│   ├── support/
│   │   ├── commands.js    # Custom Cypress commands
│   │   ├── e2e.js        # E2E test configuration
│   │   ├── utils.js      # Utility functions
│   │   └── step_definitions/  # Cucumber step definitions
└── cypress.config.ts      # Cypress configuration
```

## ✨ Features

- BDD-style test writing using Gherkin syntax
- Reusable step definitions
- JSON response validation
- Dynamic data generation
- Authentication handling
- Environment-based configuration
- ESLint integration for code quality

## 📝 License

ISC

---

Made with ❤️ by Tica
