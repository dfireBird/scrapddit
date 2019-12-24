const configJson = require('./config.json');

const config = {
    userAgent: configJson.userAgent,
    clientId: configJson.clientId,
    clientSecret: configJson.clientSecret,
    refreshToken: configJson.refreshToken,
};

module.exports = config;
