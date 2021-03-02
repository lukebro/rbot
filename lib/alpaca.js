const Alpaca = require('@alpacahq/alpaca-trade-api');

module.exports = new Alpaca({
      keyId: process.env.API_KEY,
      secretKey: process.env.API_SECRET,
      paper: true
});