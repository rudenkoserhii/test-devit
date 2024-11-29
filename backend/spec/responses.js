const examples = require('./examples');

module.exports = {
  api: {
    201: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              index: {
                type: 'number',
                description: 'The index value',
              },
            },
          },
          example: examples.api,
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Index must be an integer',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Index is required property',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'An unexpected error occurred',
              },
            },
          },
        },
      },
    },
  },
};
