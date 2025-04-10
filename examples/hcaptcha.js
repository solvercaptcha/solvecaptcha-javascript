require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

solver.hcaptcha({
    pageurl: 'https://portalunico.siscomex.gov.br',
    sitekey: 'bf8ccfbf-6a05-45f6-982a-7a7964c2f50c',
    invisible: 0,
    domain: 'hcaptcha.com',
    // proxy: {
    //     type: 'HTTPS',
    //     uri: 'login:password@IP_address:PORT'
    // }
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
