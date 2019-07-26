const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  target: 'serverless',
  env: {
    STATICKIT_URL: process.env.STATICKIT_URL,
    FORM_ID: process.env.FORM_ID
  }
})
