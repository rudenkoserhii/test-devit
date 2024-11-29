const NEXT_ROW = '\n';

const customLogger = (message) => process.stderr.write(`${message}${NEXT_ROW}`);

module.exports = { customLogger };
