const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');
const serverBaseConfig = require('./webpack.server.base');
const prodBaseConfig = require('./webpack.prod.base');

module.exports = merge(baseConfig, serverBaseConfig, prodBaseConfig);
