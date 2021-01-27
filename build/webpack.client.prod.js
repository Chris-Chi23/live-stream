const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const clientBaseConfig = require('./webpack.client.base');
const prodBaseConfig = require('./webpack.prod.base');

module.exports = merge(baseConfig, clientBaseConfig, prodBaseConfig);
