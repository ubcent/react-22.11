const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.jsx?$/, // под какой шаблон должны попадать файлы проекта под .js и .jsx
        exclude: /node_modules/, //то что исключаем 
        use: {
          loader: 'babel-loader', //ранее установленный лоадер
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }), //регистрируем плагин
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ]
}

// после этого (как прописали loader) пробуем запустить командой npm run build
// отдельно для css устанавливаем npm i -D style-loader css-loader  extract-text-webpack-plugin@next (ключ next чтобы роботало с 4 webpack)
// для css создать const ExtractTextPlugin
//создать правила для css rules
//, 'sass-loader' в use добавить если нужен препроцесор
//для HTML plugin - npm i -D html-webpack-plugin и подключаем