require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fetch = require('node-fetch');
(async () => {
/**
 * Warning: Attention, the `challenge` value is not static but dynamic.
 * You need to find the queries that makes the captcha on the page to API.
 * Then you need to make request to this API and get new `challenge`.
 * 
 * For page https://solvecaptcha.com/demo/geetest, api address is https://solvecaptcha.com/api/v1/captcha-demo/gee-test/init-params?t=${t}
 * Also note that when make request to API, the request uses the dynamic parameter `t`
 * 
 * You can read more about sending GeeTest here https://solvecaptcha.com/solvecaptcha-api#solving_geetest, or here https://solvecaptcha.com/p/geetest
 * In this example you can see how to solve GeeTest on the page https://solvecaptcha.com/demo/geetest
 * 
 */ 
   
  const t = new Date().getTime()
  // below is a request to get a new `challenge`.
  const response = await fetch(`https://solvecaptcha.com/api/v1/captcha-demo/gee-test/init-params?t=${t}`)
  const data = await response.json()

  const params = { 
    pageurl: 'https://solvecaptcha.com/demo/geetest',
    gt: data.gt,
    challenge: data.challenge
  }

  const res = await solver.geetest(params)
  try {
      console.log(res)
    } catch (error) {
      console.error(error);
    }
})()
