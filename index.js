require('./lib/setup');
const alpaca = require('./lib/alpaca');

(async () => {
    await alpaca
        .getAccount()
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err.error);
        });
})();
