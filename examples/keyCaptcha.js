require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.keyCaptcha({
    pageurl: "https://solvecaptcha.com/demo/keycaptcha",
    userId: '184015',
    sessionId: '0917788cad24ad3a69813c4fcd556061',
    webServerSign: '02f7f9669f1269595c4c69bcd4a3c52e',
    webServerSign2: 'd888700f6f324ec0f32b44c32c50bde1'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
