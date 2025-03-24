require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.tencent({
    pageurl: "https://mysite.com/page/with/tencent",
    appId: "189956587"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
