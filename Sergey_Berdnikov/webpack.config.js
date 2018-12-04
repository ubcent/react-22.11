const path = require('path');

module.exports = {
    entry: {main: path.resolve(__dirname, 'src', 'index.js')},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },

    //научим вебпак понимать весь синтаксис
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

};