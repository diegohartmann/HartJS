/** @type {import('next').NextConfig} */

const withImages = require('next-images');
module.exports = withImages({
  reactStrictMode: true,
  // esModule: true,
  // styledComponents: true,
  env: {
    API_APP_URL: 'http://localhost:3333',
  },
});