require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.atbCaptcha({
    pageurl: "https://mysite.com/page/with/atbCAPTCHA",
    appId: "af25e409b33d722a95e56a230ff8771c",
    apiServer: "https://cap.aisecurius.com"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
