# test-devit API

A simple Koa-based API that handles requests to the `/api` endpoint with a random delay, performs index validation, and implements rate limiting.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [License](#license)

## Description

This is an API built using **Koa.js** that performs the following functionalities:

- Handles requests to the `/api` endpoint.
- Adds a random delay between 1ms and 1000ms before responding.
- Validates the provided index and returns it in the response.
- Implements rate limiting with a maximum of 50 requests per second. If this limit is exceeded, a `429` status code with a relevant error message is returned.

## Installation

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/your-username/test-devit.git
   cd test-devit
```

Install the required dependencies:

```bash
npm install
```

Usage There are different ways to run the application:

Development Mode To run the application in development mode with nodemon (automatic restarts on file changes):

```bash
npm run dev
```

Production Mode To run the application in production mode:

```bash
npm start
```

Available Scripts npm run dev: Start the server with nodemon for development. npm start: Start the server in production mode. npm run

```bash
lint
```

: Lint the project using ESLint. npm test: Run unit tests using Jest. API Documentation The API provides a /api endpoint that accepts POST requests with a JSON body containing an index field. Here's how it works:

Request Body:

{ "index": 5 } Response (success): After a random delay, the server responds with the same index value.

{ "index": 5 } Response (error - missing index): If the index field is missing in the request body, the server will return:

{ "message": "Index is missing" } Rate Limiting: If more than 50 requests are made in a single second, the server will respond with a 429 Too Many Requests status:

{ "message": "Too many requests. Try again later." } Swagger API Documentation The API is documented using Swagger. You can access the Swagger UI by visiting:

http://localhost:3333/swagger Testing Unit tests are written using Jest and Supertest.

To run the tests:

npm test This will run the tests and check the functionality of the API routes, rate limiting, and error handling.

License This project is licensed under the ISC License.

---

### Key sections of the `README.md` file:

1. **Description**: Explains the purpose of the project and the key functionality (random delay, index validation, and rate limiting).
2. **Installation**: Steps to set up the project locally.
3. **Usage**: How to run the app in development or production modes, and the available npm scripts.
4. **API Documentation**: Explains the API's behavior, including the request and response formats, error handling, and rate limiting.
5. **Testing**: Information on how to run the tests using Jest.
6. **License**: Information about the license under which the project is released.

Make sure to update any placeholders such as `https://github.com/rudenkoserhii/test-devit.git` with the actual project details.
