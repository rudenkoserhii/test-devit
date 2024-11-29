const dotenv = require('dotenv');

const { app } = require('./app');
const { customLogger } = require('./utils/custom-logger');
const { MESSAGES } = require('./enums/messages.enum');

const DEFAULT_PORT = 3333;

dotenv.config();

const { PORT = DEFAULT_PORT } = process.env;

app.listen(PORT, () => {
  customLogger(`${MESSAGES.CONNECTED} ${PORT}`);
});
