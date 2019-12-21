const Snoowrap = require('snoowrap');
const config = require('./config');

const Reddit = new Snoowrap({
    userAgent: config.userAgent,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
});

module.exports = Reddit;