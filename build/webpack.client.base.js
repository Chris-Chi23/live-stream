const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: "index.js"
    },
    entry:{
        client: './src/client/index.js'
    }
};
