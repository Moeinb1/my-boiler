const { defineConfig } = require('cypress');

module.exports = defineConfig({
  fixturesFolder: false,
  env: {
    mobile: '09113193375',
    nationalCode: '4311069464',
    birthDate: '1375/07/07',
    otp: '111111',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
