const localDevConfig = require('./localDevConfig');

module.exports = {
  devServer: {
    host: localDevConfig.devHost,
    port: localDevConfig.devPort,
  },
};
