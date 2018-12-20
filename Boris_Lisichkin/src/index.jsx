import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

ReactDom.render (
    <App />,
    document.getElementById('root')
)