const { validateIndex } = require('../helpers');

const apiService = {
  getIndex(index) {
    try {
      return validateIndex(index);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { apiService };
