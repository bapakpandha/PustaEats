/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e_test/**/*.test.js',
  output: './e2e_test/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      chromium: { 
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' 
      },
      url: 'http://localhost:3306',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'PustaEats_pwa_testing'
}