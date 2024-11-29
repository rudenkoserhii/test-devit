const PLUS_START = 1;

const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + PLUS_START)) +
  Math.ceil(min);

module.exports = { getRandomNumber };
