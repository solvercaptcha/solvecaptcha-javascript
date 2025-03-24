require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/coordinates.jpg", "base64")

solver.coordinates({
    body: imageBase64,
    textinstructions: 'Select all photos containing the boat'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
