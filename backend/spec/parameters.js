const examples = require('./examples');

module.exports = {
  api: {
    name: 'api',
    in: 'body',
    description: 'Request body containing the index',
    required: true,
    schema: {
      type: 'object',
      properties: {
        index: {
          type: 'number',
          description: 'The index to be processed',
        },
      },
      example: examples.api,
      required: ['index'],
    },
  },
};
