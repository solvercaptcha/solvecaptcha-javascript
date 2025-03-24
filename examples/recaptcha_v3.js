require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.recaptcha({
    pageurl: 'https://solvecaptcha.com/demo/recaptcha-v3',
    googlekey: '6Lcyqq8oAAAAAJE7eVJ3aZp_hnJcI6LgGdYD8lge',
    version: "v3",
    min_score: "0.4",
    action: 'demo_action'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
