import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Routes from './Routes';


export default class App extends PureComponent {
    constructor(props) {
        super(props);

    this.state = {
        isShown: false,
        pageName: 'home'
    };
}

handleToggleClick = () => {
    this.setState((prevState) => ({isShown: !prevState.isShown}))
}


    render() {
        const { isShown } = this.state;
        return (
            <div>
                <Header />
                <Sidebar pageWrapId={"page-wrap"} />
                <main id="content" className="p-5">
                    <Routes />
                </main>
                <Footer />
            </div>
        );
    }
}