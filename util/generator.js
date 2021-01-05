const moment = require('moment');

exports.logFileGenerator = () => `${moment().format('YYYY-MM-DD')}_access.log`;
