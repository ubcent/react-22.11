import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentsList from 'containers/CommentsListContainer';
import UsersContainer from 'containers/UsersContainer';
import SimpleSnackbar from 'components/Snackbar';


export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Sidebar pageWrapId="page-wrap" />
                    <main id="content" className="p-5">
                        <Switch>
                            <Route path="/" exact component={HomeContainer} />
                            <Route path="/home" component={HomeContainer} />
                            <Route path="/blog" component={BlogContainer} />
                            <Route path="/comment" component={CommentsList} />
                            <Route path="/user" component={UsersContainer} />
                        </Switch>
                    </main>
                    <SimpleSnackbar />
                    <Footer />
                </div>
            </Router>
        );
    }
}