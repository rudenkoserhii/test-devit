const packageJson = require('../package.json');
const schemas = require('./schemas');
const parameters = require('./parameters');
const responses = require('./responses');

module.exports = {
  openapi: '3.1.0',
  info: {
    description: packageJson.description,
    version: packageJson.version,
    title: packageJson.name,
    contact: packageJson.author,
  },
  servers: [
    {
      description: 'Internal',
      url: 'http://localhost:3333/',
    },
  ],
  tags: [
    {
      name: 'Rest',
      description: 'Api methods',
    },
  ],
  paths: {
    '/api': {
      post: {
        tags: ['Rest'],
        summary: 'Get response with index from request',
        description: 'Send index and get the same index with random delay',
        parameters: [parameters.api],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/api',
              },
            },
          },
        },
        responses: responses.api,
      },
    },
  },
  components: {
    schemas: {
      api: schemas.api,
    },
  },
};
