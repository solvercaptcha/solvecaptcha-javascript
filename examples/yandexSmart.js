require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.yandexSmart({ 
    pageurl: "https://captcha-api.yandex.ru/demo",
    sitekey: "FEXfAbHQsToo97VidNVk3j4dC74nGW1DgdxjtNB9"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
