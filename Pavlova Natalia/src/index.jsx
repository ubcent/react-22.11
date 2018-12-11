import './style.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)