require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.geetestV4({
    pageurl: 'https://solvecaptcha.com/demo/geetest-v4',
    captcha_id: 'e392e1d7fd421dc63325744d5a2b9c73'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
