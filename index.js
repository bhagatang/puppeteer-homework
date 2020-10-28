const getScreenshot = require('./module/get-screenshot');

for (let i = 2; i < process.argv.length; i++) {
    getScreenshot(process.argv[i], __dirname);
}