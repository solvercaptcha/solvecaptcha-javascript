require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/rotatecaptcha.png", "base64")

solver.rotate({
  body: imageBase64,
  angle: 15,
  textinstructions: "Rotate the object to the correct position"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
