require('dotenv').config({ path: '../.env' });
const { Solver } = require('../dist/index.js');

const APIKEY = process.env.SOLVECAPTCHA_APIKEY;
const solver = new Solver(APIKEY);

const fs = require('fs')
const imageBase64 = fs.readFileSync("./media/imageCaptcha_6e584.png", "base64")

/**
 *  Example of solving a base64 image captcha and sending a report based on the result
 */
solver.imageCaptcha({
    body: imageBase64,
    numeric: 4,
    min_len: 5,
    max_len: 5,
    lang: 'en',
    textinstructions: 'Type text on the image'
})
.then((res) => {
    console.log(res);
    let isCorrectAnswer = res.data === '6e584';
    console.log("Is correct answer: " + isCorrectAnswer);
    
    if (isCorrectAnswer) {
        console.log("Good report:");
        return solver.goodReport(res.id);
    } else {
        console.log("Bad report:");
        return solver.badReport(res.id);
    }
})
.catch((err) => {
    console.log(err);
})