//React импортируем в каждом файле
import React, { Component } from 'react';
//ReactDom только в точке входа
import ReactDom from 'react-dom';
//подключаем провайдера redux
import { Provider } from 'react-redux';
//экземпляр stor'a
import store from './store';
//Подключаем роутинг
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//подключаем свои компоненты
import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from './routes';
//Подключаем стили бутстрап
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Switch>
                    {routes.map((route, idx) =>
                        <Route key={idx} {...route}/>
                    )}
                </Switch>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('main-div'),
);
