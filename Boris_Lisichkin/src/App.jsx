import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}