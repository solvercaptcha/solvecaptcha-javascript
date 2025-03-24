require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.recaptcha({
    pageurl: 'https://solvecaptcha.com/demo/recaptcha-v2',
    googlekey: '6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
