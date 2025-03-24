require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.mtCaptcha({
    pageurl: "https://service.mtcaptcha.com/mtcv1/demo/index.html",
    sitekey: "MTPublic-DemoKey9M"
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
