const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, '../server'),
        filename: "[name].js"
    },
    entry:{
        server: './src/server/index.js'
    }
};
