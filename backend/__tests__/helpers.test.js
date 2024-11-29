const { getRandomNumber, validateIndex } = require('../helpers');
const { ERRORS } = require('../enums');

describe('getRandomNumber', () => {
  it('should return a random number within the specified range', () => {
    const min = 10;
    const max = 20;

    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomNumber(max, min);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    }
  });

  it('should handle min and max values correctly', () => {
    const min = 5;
    const max = 5;
    const randomNumber = getRandomNumber(max, min);
    expect(randomNumber).toBe(5);
  });
});

describe('validateIndex', () => {
  it('should validate a valid integer index', () => {
    const validIndex = 5;
    const result = validateIndex(validIndex);
    expect(result).toBe(validIndex);
  });

  it('should throw an error for a non-integer index', () => {
    const invalidIndex = 'abc';
    expect(() => validateIndex(invalidIndex)).toThrowError(
      ERRORS.INDEX_NOT_INTEGER,
    );
    expect(() => validateIndex(1.5)).toThrowError(ERRORS.INDEX_NOT_INTEGER);
  });

  it('should throw an error for a negative index', () => {
    const negativeIndex = -1;
    expect(() => validateIndex(negativeIndex)).toThrowError(
      ERRORS.INDEX_NOT_INTEGER,
    );
  });
});
