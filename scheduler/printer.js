const cron = require('node-cron');


// đây là để tất cả là * nên sẽ gửi bất kỳ chữ Hello word https://viblo.asia/p/cron-jon-nodejs-voi-node-cron-924lJ4kbKPM
module.exports = () => {
  cron.schedule('* * * * *', () => {
    console.log('Hello world!');
  });
};