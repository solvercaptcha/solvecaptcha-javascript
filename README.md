![solvecaptcha-javascript](https://github.com/user-attachments/assets/60b0a294-4e51-4ff5-a101-82a1aebe33ab)<a href="https://github.com/solvercaptcha/solvecaptcha-python"><img src="https://github.com/user-attachments/assets/37e1d860-033b-4cf3-a158-468fc6b4debc" width="82" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-javascript"><img src="https://github.com/user-attachments/assets/371b271e-33c3-4217-af21-b95517a4677c" width="36" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-go"><img src="https://github.com/user-attachments/assets/ab22182e-6cb2-41fa-91f4-d5e89c6d7c6f" width="63" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-ruby"><img src="https://github.com/user-attachments/assets/0270d56f-79b0-4c95-9b09-4de89579914b" width="75" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-cpp"><img src="https://github.com/user-attachments/assets/36de8512-acfd-44fb-bb1f-b7c793a3f926" width="45" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-php"><img src="https://github.com/user-attachments/assets/e8797843-3f61-4fa9-a155-ab0b21fb3858" width="52" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-java"><img src="https://github.com/user-attachments/assets/a3d923f6-4fec-4c07-ac50-e20da6370911" width="50" height="30"></a>
<a href="https://github.com/solvercaptcha/solvecaptcha-csharp"><img src="https://github.com/user-attachments/assets/f4d449de-780b-49ed-bb0a-b70c82ec4b32" width="38" height="30"></a>

# JavaScript captcha solver (Node.js): Bypass reCAPTCHA, Cloudflare, hCaptcha, GeeTest and more

Use the [JavaScript captcha solver](https://solvecaptcha.com/captcha-solver/javascript-captcha-solver-bypass) to automatically bypass any captcha - including reCAPTCHA v2, Invisible, v3, Enterprise, hCaptcha, Cloudflare Turnstile, GeeTest sliders, Amazon WAF, FunCaptcha, and both image and text-based challenges.

## ✅ Supported captcha solvers
To get started quickly, check out the [Captcha Solver API](https://solvecaptcha.com/captcha-solver-api) documentation.

### Helpful links:
- [reCAPTCHA v2 solver (Node.js + Puppeteer)](https://solvecaptcha.com/captcha-solver/recaptcha-v2-solver-bypass)
- [reCAPTCHA v3 solver](https://solvecaptcha.com/captcha-solver/recaptcha-v3-solver-bypass)
- [hCaptcha solver (Playwright-ready)](https://solvecaptcha.com/captcha-solver/hcaptcha-solver-bypass)
- [Text & Image captcha solver (Base64 / file input)]()
- [Cloudflare captcha / Turnstile solver](https://solvecaptcha.com/captcha-solver/cloudflare-captcha-solver-bypass)
- [Amazon captcha (WAF & login forms)](https://solvecaptcha.com/captcha-solver/amazon-captcha-solver-bypass)
- [GeeTest slider solver](https://solvecaptcha.com/captcha-solver/slider-captcha-solver-bypass)
- [FunCaptcha (Arkose Labs)](https://solvecaptcha.com/captcha-solver/funcaptcha-solver-bypass)
- [Other custom captcha types](https://solvecaptcha.com/)

## 🛠️ Features
- Fast and fully automated bypass
- Works in **JavaScript** and **Node.js** environments
- Compatible with **Puppeteer**, **Playwright**, and **Selenium**
- Lightweight npm module with modern **async/await** support
- Pay only for successful solves
- 99.9% uptime
- 24/7 support for developers and integration teams

## 📦 Use cases

- Web scraping behind reCAPTCHA or Cloudflare walls
- Automated form submission and login flows
- QA pipelines and headless browser testing
- Bypassing captchas in research or bot-detection evaluation
- Custom browser automations using JavaScript or Node.js

Need help integrating with your Node.js app or JS automation tools? [Open an issue](https://github.com/solvercaptcha/solvecaptcha-javascript/issues) or fork this repo to contribute.

- [JavaScript captcha solver (Node.js): Bypass reCAPTCHA, Cloudflare, hCaptcha, GeeTest and more](#javascript-captcha-solver-nodejs-bypass-recaptcha-cloudflare-hcaptcha-geetest-and-more)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [SolveCaptcha instance options](#solvecaptcha-instance-options)
  - [Solve captcha](#solve-captcha)
    - [Image Captcha](#image-captcha)
    - [reCAPTCHA v2](#recaptcha-v2)
    - [reCAPTCHA v3](#recaptcha-v3)
    - [hCaptcha](#hcaptcha)
    - [FunCaptcha](#funcaptcha)
    - [GeeTest](#geetest-captcha)
    - [GeeTest V4](#geetest-v4-captcha)
    - [Yandex Smart Captcha](#yandex-smart-captcha)
    - [Lemin Cropped Captcha](#lemin-cropped-captcha)
    - [Cloudflare Turnstile](#cloudflare-turnstile)
    - [Amazon WAF](#amazon-waf)
    - [Capy](#capy)
    - [ClickCaptcha](#clickcaptcha)
    - [DataDome CAPTCHA](#datadome-captcha)
    - [CyberSiARA](#cybersiara)
    - [MTCaptcha](#mtcaptcha)
    - [Friendly Captcha](#friendly-captcha)
    - [Bounding Box Method](#bounding-box-method)
    - [Grid](#grid)
    - [Text Captcha](#text-captcha)
    - [Canvas](#canvas)
    - [Rotate](#rotate)
    - [KeyCaptcha](#keycaptcha)
    - [Cutcaptcha](#cutcaptcha)
    - [Tencent](#tencent)
    - [atbCAPTCHA](#atbcaptcha)
    - [Audio Captcha](#audio-captcha)
  - [Other methods](#other-methods)
    - [goodReport](#goodreport)
    - [badReport](#badreport)
    - [balance](#balance)
  - [Proxies](#proxies)
  - [Examples](#examples)
  - [Examples using Puppeteer](#examples-using-puppeteer)
- [Useful articles](#useful-articles)
- [Get in touch](#get-in-touch)
- [Join the team 👪](#join-the-team-)
- [License](#license)
  - [Graphics and Trademarks](#graphics-and-trademarks)


## Installation
You can install this package using NPM:

```sh
npm install solvecaptcha-javascript
```
or Yarn:
```sh
yarn add solvecaptcha-javascript
```

To install directly from GitHub:
```sh
npm install github:solvercaptcha/solvecaptcha-javascript
```

## Configuration

You can create a SolveCaptcha instance as follows:

```js
const SolveCaptcha = require("solvecaptcha-javascript")
const solver = new SolveCaptcha.Solver("<Your solvecaptcha api key>")
```

Additionally, several configuration options are available:

```javascript
const apiKey = 'YOUR_API_KEY'
const pollingInterval = 10

const solver = new SolveCaptcha.Solver(apiKey, pollingInterval)
```
### SolveCaptcha instance options

| Option           | Default value  | Description                                                                                  |
| ---------------- | -------------- | -------------------------------------------------------------------------------------------- |
| apiKey           | -              | Your personal API key                                                                           |
| pollingInterval  | 5000           | The delay in milliseconds between each request to the res.php API endpoint. It's not recommended to set this value below `5000` milliseconds (5 seconds). |

## Solve captcha

When submitting an image-based captcha, you can include extra parameters to assist Solvecaptcha workers in solving it accurately.

### Captcha options

| Option          | Default Value | Description                                                                                           |
| --------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| numeric         | 0             | Indicates whether the captcha includes only numbers, letters, or a mix [see more info in the API docs][post options] |
| min_len         | 0             | Minimum number of characters expected in the answer                                                   |
| max_len         | 0             | Maximum number of characters allowed in the answer                                                    |
| phrase          | 0             | Specifies whether the answer should consist of multiple words                                         |
| regsense        | 0             | Indicates if case sensitivity should be considered in the answer                                      |
| calc            | 0             | Specifies whether the captcha involves a mathematical expression to solve                             |
| lang            | -             | Sets the language of the captcha; refer to the [list of supported languages]                          |
| textinstructions| -             | A hint or instruction shown to the workers along with the captcha image                               |

Below are simple examples for each captcha type — take a look at the code samples provided.

### Image captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_normal_captcha)</sup>

To solve a standard captcha (distorted text within an image), use the method below. It can also be applied for general text recognition in images.

```js
const imageBase64 = fs.readFileSync("./examples/media/imageCaptcha_6e584.png", "base64")

solver.imageCaptcha({
    body: imageBase64,
    numeric: 4,
    min_len: 5,
    max_len: 5
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### reCAPTCHA V2

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_recaptchav2_new)</sup>

Use this method to solve reCAPTCHA V2 and retrieve a token that allows you to bypass the verification.

```js
solver.recaptcha({
  pageurl: 'https://solvecaptcha.com/demo/recaptcha-v2',
  googlekey: '6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u'
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### reCAPTCHA V3

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_recaptchav3)</sup>

This method is used to solve reCAPTCHA V3 and returns a token for verification.

```js
solver.recaptcha({
    pageurl: 'https://solvecaptcha.com/demo/recaptcha-v3',
    googlekey: '6Lcyqq8oAAAAAJE7eVJ3aZp_hnJcI6LgGdYD8lge',
    version: "v3",
    min_score: "0.4",
    action: 'demo_action'
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### hCaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_hcaptcha)</sup>

Use this method to solve hCaptcha and retrieve a token that allows you to bypass the verification.

```js
solver.hcaptcha({
  pageurl: 'https://portalunico.siscomex.gov.br',
  sitekey: 'bf8ccfbf-6a05-45f6-982a-7a7964c2f50c',
  invisible: 0,
  domain: 'hcaptcha.com',
  // proxy: {
  //   type: 'HTTPS',
  //   uri: 'login:password@IP_address:PORT'
  // }
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.error(err);
})
```

### FunCaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_funcaptcha_new)</sup>

Method for solving FunCaptcha (Arkoselabs). Returns a verification token.

```js
solver.funCaptcha({
  pageurl: "https://funcaptcha.com/tile-game-lite-mode/fc/api/nojs/?pkey=804380F4-6844-FFA1-ED4E-5877CA1F1EA4&lang=en",
  publickey: "804380F4-6844-FFA1-ED4E-5877CA1F1EA4"
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### GeeTest Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_geetest)</sup>

Method for solving GeeTest puzzle captcha. Returns a JSON object containing the required tokens.

```js
// Read more about `challenge` on the page https://solvecaptcha.com/p/geetest
solver.geetest({ 
  pageurl: 'https://solvecaptcha.com/demo/geetest',
  gt: '81388ea1fc187e0c335c0a8907ff2625',
  challenge: '<you need to get a new challenge value each time>'
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### GeeTest V4 Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#geetest-v4)</sup>

Use this method to solve GeeTest v4 captcha. The response is returned in JSON format.

```js
solver.geetestV4({
  pageurl: 'https://solvecaptcha.com/demo/geetest-v4',
  captcha_id: 'e392e1d7fd421dc63325744d5a2b9c73'
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### Yandex Smart Captcha

Use this method to solve Yandex Smart Captcha and receive a token that allows you to bypass the verification.

```js
solver.yandexSmart({ 
  pageurl: "https://captcha-api.yandex.ru/demo",
  sitekey: "FEXfAbHQsToo97VidNVk3j4dC74nGW1DgdxjtNB9"
 })
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### Lemin Cropped Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#lemin)</sup>

Use this method to solve Lemin captcha and obtain a token to bypass the verification process..

```js
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
```

### Cloudflare Turnstile

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#turnstile)</sup>

Use this method to solve Cloudflare Turnstile captcha. Returns a JSON response containing the token.

Turnstile captcha comes in two variants, one of which is the Cloudflare Turnstile Challenge page. For handling this type, we offer a [demo](https://github.com/solvercaptcha/cloudflare-demo). Check out this [demo](https://github.com/solvercaptcha/cloudflare-demo) if you need to solve captchas on the Cloudflare Turnstile Challenge page.

```js
solver.cloudflareTurnstile({
    pageurl: "https://app.nodecraft.com/login",
    sitekey: "0x4AAAAAAAAkg0s3VIOD10y4"    
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Amazon WAF

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#amazon-waf)</sup>

Use this method to solve Amazon WAF Captcha, also known as AWS WAF Captcha, which is part of Amazon AWS's intelligent threat mitigation system. Returns a JSON response containing the token.

```js
//INFO: The `context` parameter is dynamic and must be retrieved from the page in real time for each request.
solver.amazonWaf({
  pageurl: "https://non-existent-example.execute-api.us-east-1.amazonaws.com/latest",
  sitekey: "AQIDAHjcYu/GjX+QlghicBgQ/7bFaQZ+m5FKCMDnO+vTbNg96AHMDLodoefdvyOnsHMRt...",
  context: "9BUgmlm48F92WUoqv97a49ZuEJJ50TCk9MVr3C7WMtQ0X6flVbufM4n8mjFLmbLVAPgaQ...",
  iv: "CgAHbCe2GgAAAAAj",
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

### Capy

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_capy)</sup>

Token-based method for bypassing Capy puzzle captcha verification.

```js
solver.capyPuzzle({
    pageurl: "https://www.capy.me/account/register/",
    captchakey: "PUZZLE_Cme4hZLjuZRMYC3uh14C52D3uNms5w"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### DataDome CAPTCHA

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#datadome)</sup>

Use this method to solve DataDome captcha and get a token to bypass the protection.

> [!IMPORTANT]
> A proxy is required to solve the DataDome captcha. It is recommended to use residential proxies.

```js
solver.dataDome({
    pageurl: "https://rendezvousparis.hermes.com/client/register",
    captcha_url: "https://geo.captcha-delivery.com/captcha/?initialCid=AHrlqAAAAAMAEuQtkf4k1c0ABZhYZA%3D%3D&hash=789361B674144528D0B7EE76B35826&cid=mY4z7GNmh7Nt1lAFwpbNHAOcWPhyPgjHD2K1Pm~Od1iEKYLUnK3t7N2ZGUj8OqDK65cnwJHtHwd~t902vlwpSBA5l4ZHbS1Qszv~jEuEUJNQ_jMAjar2Kj3kq20MRJYh&t=fe&referer=https%3A%2F%2Frendezvousparis.hermes.com%2Fclient%2Fregister&s=40119&e=67fef144ac1a54dbd7507776367d2f9d5e36ec3add17fa22f3cb881db8385838",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    proxy: "login:password@1.2.3.4:8888", // The (Username : Password @ Address : Port) of our chosen proxy
    proxytype: "http" // The 'Type' of proxy, http, https, socks, ect.
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### CyberSiARA

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#cybersiara)</sup>

Use this method to solve CyberSiARA captcha and receive a token to bypass the verification.

```js
solver.cyberSiARA({
    pageurl: "https://www.cybersiara.com/book-a-demo",
    master_url_id: "OXR2LVNvCuXykkZbB8KZIfh162sNT8S2",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### MTCaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#mtcaptcha)</sup>

Use this method to solve MTCaptcha and get a token that allows you to bypass the verification.

```js
solver.mtCaptcha({
    pageurl: "https://service.mtcaptcha.com/mtcv1/demo/index.html",
    sitekey: "MTPublic-DemoKey9M"
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### Friendly Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#friendly-captcha)</sup>

Use this method to solve Friendly Captcha and retrieve a token to bypass the verification process.

> [!IMPORTANT]  
> For the token to work correctly, the captcha widget must not be loaded on the page. You need to block the request to `/friendlycaptcha/...module.min.js`. If the widget has already been loaded, there is a high chance the obtained token will be invalid.

```js
solver.friendlyCaptcha({
    pageurl: "https://geizhals.de/?liftban=1&from=/455973138?fsean=5901747021356",
    sitekey: "FCMST5VUMCBOCGQ9"
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### ClickCaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#coordinates)</sup>

The ClickCaptcha method returns coordinates of specific points on the captcha image. It's useful when the task requires clicking on certain areas within the image.

```js
const imageBase64 = fs.readFileSync("./tests/media/coordinates.jpg", "base64")

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
```

### Bounding Box Method

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#bounding_box)</sup>

Use the Bounding Box Method when you need to highlight specific objects in an image. To do this, provide both the image and the corresponding instructions for markup. Instructions can be submitted either as plain text or as a `base64`-encoded image.

> [!IMPORTANT]  
> You must include either the `imginstructions` or `textinstructions` parameter.

```js
solver.boundingBox({ 
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAIAAAB...",
  textinstructions: "Circle all the cars in the image.",
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Grid

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#grid)</sup>

This method is suitable for solving captchas where the image can be split into equal-sized segments, such as reCAPTCHA V2. A grid is overlaid on the image, and the response contains the numbers of the selected boxes.

> [!IMPORTANT]  
> You must include either the `imginstructions` or `textinstructions` parameter.

```js
solver.grid({ 
  body: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAIAAAB...",
  textinstructions: "Select cars in the image"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Text Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_text_captcha)</sup>

This method is used to bypass captchas that present a question in plain text and require a text-based answer.

```js
solver.textCaptcha({
  textcaptcha: "If tomorrow is Saturday, what day is today?",
  lang: 'en'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Canvas

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#canvas)</sup>

The canvas method is used when you need to outline an object on an image by drawing a line around it. It returns a set of coordinates for points that form a polygon.

```js
solver.canvas({
    body: 'iVBORw0KGgoAAAANSgAAAcIA...',
    imginstructions: '/9j/4AAQSkZJRgABAQEA...',
    textinstructions: 'Highlight the red CIRCLE'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Rotate

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_rotatecaptcha)</sup>

This method is intended for solving captchas that require rotating an object, commonly used in FunCaptcha. It returns the angle of rotation needed.

```js
solver.rotate({
  body: imageBase64,
  textinstructions: "Rotate the object to the correct position"
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### KeyCaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#solving_keycaptcha)</sup>

Token-based method for solving KeyCaptcha challenges.

```js
solver.keyCaptcha({
    pageurl: "https://solvecaptcha.com/demo/keycaptcha",
    userId: '184015',
    sessionId: '0917788cad24ad3a69813c4fcd556061',
    webServerSign: '02f7f9669f1269595c4c69bcd4a3c52e',
    webServerSign2: 'd888700f6f324ec0f32b44c32c50bde1'
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
```

### Cutcaptcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#cutcaptcha)</sup>

Use this method to solve Cutcaptcha. The response is returned in JSON format.

```js
solver.cutCaptcha({
    pageurl: "https://mysite.com/page/with/cutcaptcha",
    misery_key: "098e6a849af406142e3150dbf4e6d0538db2b51f", 
    api_key: "SAs61IAI",
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### Tencent

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#tencent)</sup>

Use this method to solve Tencent captcha. The response is provided in JSON format.

```js
solver.tencent({
    pageurl: "https://mysite.com/page/with/tencent",
    appId: "189956587"  
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})
```

### atbCAPTCHA

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#atb-captcha)</sup>

Use this method to solve the atbCAPTCHA challenge. It returns a token that allows you to bypass the captcha verification.

```js
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
```

### Audio Captcha

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#audio-recognition)</sup>

Use the method below to bypass an audio captcha (only `mp3` format is supported). You must specify the language using `lang = 'en'`. Supported languages include: "en", "ru", "de", "el", "pt", and "fr".

```js
solver.audio({
  body: "SUQzBAAAAAAAHFRTU0UAAAA...",
  lang: "en"
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})
```

## Other methods

### goodReport

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#reporting-answers)</sup>

Use this method to report a correct captcha solution.

```js
solver.goodReport('7031846604')
```

### badReport 

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#reporting-answers)</sup>

Use this method to report an incorrect captcha solution.

```js
solver.badReport('7031854546')
```

### balance 

<sup>[Description of the API method.](https://solvecaptcha.com/solvecaptcha-api#additional-methods)</sup>

Use this method to check the balance of your account.

```js
solver.balance()
.then((res) => {
    console.log(res)
})
```

## Proxies

You can include your proxy as an additional parameter when using methods like: recaptcha, funcaptcha, geetest, geetest v4, keycaptcha, capy puzzle, lemin, turnstile, amazon waf, DataDome, CyberSiARA, MTCaptcha, Friendly Captcha, and others. The proxy will be passed to the API to assist in solving the captcha.

Example: Solving reCAPTCHA V2 with a proxy:
```js
solver.recaptcha({
    pageurl: 'https://solvecaptcha.com/demo/recaptcha-v2',
    googlekey: '6LfD3PIbAAAAAJs_eEHvoOl75_83eXSqpPSRFJ_u',
    proxy: 'HTTPS',
    proxytype: 'login:password@123.123.123.123:3128'
})
```
## Examples

Examples for solving all supported captcha types can be found in the [examples] directory.

## Useful articles

- [Solve and bypass Google reCAPTCHA, hCaptcha, Image CAPTCHA,  Cloudflare Challenge and any captcha in Selenium with captcha solver.](https://solvecaptcha.com/captcha-solver/selenium-captcha-solver-bypass)
- [Solve and bypass Google reCAPTCHA, hCaptcha, Arkose FunCaptcha, Cloudflare Turnstile, and any captcha in Puppeteer with captcha solver.](https://solvecaptcha.com/captcha-solver/puppeteer-captcha-solver-bypass)

## Get in touch

<a href="mailto:info@solvecaptcha.com"><img src="https://github.com/user-attachments/assets/539df209-7c85-4fa5-84b4-fc22ab93fac7" width="80" height="30"></a>
<a href="https://solvecaptcha.com/support/faq#create-ticket"><img src="https://github.com/user-attachments/assets/be044db5-2e67-46c6-8c81-04b78bd99650" width="81" height="30"></a>

## Become part of the team 👪

There are plenty of ways to get involved — development is just one of them! Discover your next opportunity. We're hiring AI specialists, scrapers, developers, tech support, and more! 😍

<a href="mailto:info@solvecaptcha.com"><img src="https://github.com/user-attachments/assets/36d23ef5-7866-4841-8e17-261cc8a4e033" width="80" height="30"></a>

## License

This repository’s code is distributed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

### Graphics and Trademarks

Graphics and trademarks included in this repository are not licensed under the MIT License. For permission to use these assets, please contact our <a href="mailto:info@solvecaptcha.com">support team</a>.

<!-- Shared links -->
[Solvecaptcha]: https://solvecaptcha.com/
[JavaScript captcha solver]: https://solvecaptcha.com/captcha-solver/javascript-captcha-solver-bypass
[post options]: https://solvecaptcha.com/solvecaptcha-api#normal_post
[list of supported languages]: https://solvecaptcha.com/solvecaptcha-api#language
[examples]: ./examples
