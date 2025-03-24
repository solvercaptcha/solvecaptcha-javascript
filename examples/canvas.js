require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/canvas.png", "base64")
const imginstructionsBase64 = fs.readFileSync("./media/canvasImgInstructions.jpg", "base64")

solver.canvas({
    body: imageBase64,
    textinstructions: 'Highlight the red CIRCLE',
    imginstructions: imginstructionsBase64,
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
