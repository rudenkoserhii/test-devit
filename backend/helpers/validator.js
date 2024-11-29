const { ERRORS, STATUSES } = require('../enums');

const NUMBER_TYPE = 'number';
const ZERO = 0;

const validateIndex = (index) => {
  if (
    typeof index !== NUMBER_TYPE ||
    !Number.isInteger(index) ||
    index < ZERO
  ) {
    const error = new Error(ERRORS.INDEX_NOT_INTEGER);
    error.status = STATUSES.BAD_REQUEST;
    throw error;
  }
  return index;
};

module.exports = { validateIndex };
