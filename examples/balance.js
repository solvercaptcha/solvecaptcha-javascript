require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

/**
 * This example demonstrates how to retrieve the current `balance` of an API key 
 * in the solvecaptcha.com system using the `balance()` method from the `Solver` class.
 */
solver.balance()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
