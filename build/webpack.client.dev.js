const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const clientBaseConfig = require('./webpack.client.base');
const devBaseConfig = require('./webpack.dev.base');

module.exports = merge(baseConfig, clientBaseConfig, devBaseConfig);
