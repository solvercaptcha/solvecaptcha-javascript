require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.lemin({
  pageurl:'https://solvecaptcha.com/demo/lemin', 
  captcha_id: 'CROPPED_3dfdd5c_d1872b526b794d83ba3b365eb15a200b',
  div_id: 'lemin-cropped-captcha',
  api_server: 'api.leminnow.com'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
