import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import CommentsList from 'containers/CommentsListContainer';


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
                <Main />
                <Footer />
                <CommentsList />
            </div>
        );
    }
}