//чтобы не ошибиться с путями, используем модуль path, который встроен в NodeJs
const path = require('path');
//подключаем плагин для работы webpack с CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//подключим плагин для работы с HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //точка входа - отсюда webpack собирает проект, __dirname - встроенная переменная, указывает на папку запуска
    entry: { main: path.resolve(__dirname, 'src', 'index.jsx')},
    // укажем, куда готовое приложение должно сохранятся, по умолчанию - dist
    output: {
        //папка, куда все надо складывать
        path: path.resolve(__dirname, 'dist'),
        //имя файла, в который все будет сохраняться
        filename: 'bundle.js',
    },
    //специальное свойство
    resolve:{
        // свойство, помогает с путями для импорта (делает имена путей короче)
        alias:{
            components: path.resolve(__dirname, 'src', 'components'),
        },
        // сойство, указывающее те расширения, которые нас интересуют
        extensions: ['.js', '.jsx'],
    },

    //webpack должен понимать последний синтаксис js, используем расширение loader с транспилятором babel
    //npm i -D babel-core babel-loader@7 babel-preset-env babel-preset-stage-0
    //сообщаем babel о существовании пресетов через файл .babelrc

    //перечисляем все правила для обработки
    module: {
        //массив правил, каждый элемент массива - это отдельное правило. Правило - это объект со важными свойствами
        rules: [
            {
                //свойство test - регулярное выражение к имени файла, webpack определяет применять ли правило к файлу или нет.
                test: /\.jsx?$/,
                //укажем, какие папки надо исключить, например, node_modules собирать не надо, т.к. она уже собрана
                exclude: /node_modules/,
                //указываем loader(загрузчик), который будет сдесь применяться
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //декларируем подключенные loader
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    //зарегистрируем плагин
    plugins: [
        //укажем имя файла, куда все будет складываться
        new ExtractTextPlugin({ filename: 'style.css' }),
        //регистрируем плагин для работы с html
        new HtmlWebpackPlugin({
            //что брать за основу
            template: path.resolve(__dirname, 'src', 'index.html'),
            //куда сохранять
            filename: 'index.html',
        })
    ]
};