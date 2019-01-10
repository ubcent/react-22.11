const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {main: path.resolve(__dirname, 'src', 'index.jsx')},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        //задаем короткие имена ("константы") для папок проекта
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
        },
        //указываем расширения по умолчанию
        extensions: [
            '.js',
            '.jsx',
        ],
    },

    //научим вебпак понимать весь синтаксис
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
      new ExtractTextPlugin({filename: 'style.css'}),
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html'),
          filename: 'index.html',
      })
    ]
};
