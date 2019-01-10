const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: path.resolve(__dirname, 'src', 'index.jsx') },
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
     },
     resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
        }
     },
     module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ],
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
        ]
     },
     devServer: {
         historyApiFallback: true,
     },
     plugins: [
         new ExtractTextPlugin({ filename: 'style.css' }),
         new HtmlWebpackPlugin({
             template: path.resolve(__dirname, 'src', 'index.html'),
             filename: 'index.html',
         })
     ]
};