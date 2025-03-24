require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fs = require('fs')
const audioCaptchaBase64 = fs.readFileSync("./media/example.mp3", "base64")

solver.audio({
  body: audioCaptchaBase64,
  lang: 'en'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
