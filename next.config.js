const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX(
  withCSS({
    target: 'serverless',
    env: {
      STATICKIT_URL: process.env.STATICKIT_URL,
      FORM_ID: process.env.FORM_ID
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'md']
  })
);
