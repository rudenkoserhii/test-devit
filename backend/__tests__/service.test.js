const { apiService } = require('../services');
const { validateIndex } = require('../helpers');

jest.mock('../helpers', () => ({
  validateIndex: jest.fn(),
}));

describe('apiService.getIndex', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a valid index when validateIndex returns a valid value', () => {
    validateIndex.mockReturnValue(42);

    const index = 1;
    const result = apiService.getIndex(index);

    expect(validateIndex).toHaveBeenCalledWith(index);
    expect(result).toBe(42);
  });

  it('should throw an error when validateIndex throws an error', () => {
    const errorMessage = 'Invalid index';
    validateIndex.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const index = 1;

    expect(() => {
      apiService.getIndex(index);
    }).toThrowError(errorMessage);
  });
});
