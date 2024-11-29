const examples = require('./examples');

module.exports = {
  api: {
    type: 'object',
    properties: {
      index: {
        type: 'number',
      },
    },
    required: ['index'],
    example: examples.api,
  },
};
