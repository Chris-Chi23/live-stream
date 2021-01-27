const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    module:{
        rules: [
            {
                test:/\.jsx?$/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                    }
                ]
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()]
};
