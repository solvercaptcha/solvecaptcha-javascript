const solveCaptchaName = 'solvecaptcha'
const solveCaptchaIn = 'https://solvecaptcha.com/in.php'
const solveCaptchaRes =  'https://solvecaptcha.com/res.php'

const softId: number = 1000002

const supportedProviders = {
  solveCaptcha: {
    name: solveCaptchaName,
    in: solveCaptchaIn,
    res: solveCaptchaRes
  }
}

export { supportedProviders, softId }