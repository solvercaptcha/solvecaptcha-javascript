require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.text({
  textcaptcha: "If tomorrow is Saturday, what day is today?",
  lang: 'en'
})
.then((res) => {
  console.log(res);
 })
.catch((err) => {
  console.log(err);
})
