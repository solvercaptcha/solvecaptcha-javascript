require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.cutCaptcha({
    pageurl: "https://mysite.com/page/with/cutcaptcha",
    miseryKey: "098e6a849af406142e3150dbf4e6d0538db2b51f", 
    apiKey: "SAs61IAI",
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
