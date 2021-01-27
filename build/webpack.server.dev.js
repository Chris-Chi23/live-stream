const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const serverBaseConfig = require('./webpack.server.base');
const devBaseConfig = require('./webpack.dev.base');

module.exports = merge(baseConfig, serverBaseConfig, devBaseConfig);
