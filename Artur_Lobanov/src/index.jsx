import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from './components/Container';
import Footer from './components/Footer';
import Timer from 'components/Timer';
// import TopBilboard from 'components/TopBilboard';
import Features from 'components/Features';
import Testimonials from 'components/Tesimonials';
import RecentPosts from 'components/RecentPosts';
import CommentsList from 'containers/CommentsListContainer.jsx';
import VideoContainer from 'components/VideoContainer';

import routes from './routes';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            isShown: false,
        };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({ isShown: !prevState.isShown }))
    }

    render() {
        const { isShown } = this.state;
        return (
            <div>
                {/* <Header size="small" color="red" /> */}
                {/* <TopBilboard /> */}
                <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
                {/* <Features /> */}
                <Switch>
                     <Route exact path="/" component={Features} />
                     <Route exact path="/blog" component={CommentsList} />
                     <Route exact path="/aboutUs" component={Timer} />   
                </Switch>
                <Switch>
                     <Route exact path="/" component={VideoContainer} />
                </Switch>
                
                {/* <Testimonials /> */}
                <Switch>
                     <Route exact path="/" component={Testimonials} />
                     {/* <Route exact path="/blog" component={CommentsList} />    */}
                </Switch>
                <Switch>
                     <Route exact path="/" component={RecentPosts} />
                     {/* <Route exact path="/blog" component={CommentsList} />    */}
                </Switch>
                {/* <RecentPosts /> */}
                {/* <Container>
                    <div>Hello world!!!!</div>
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                </Container> */}
                {/* <CommentsList /> */}
                {/* <Counter /> */}
                {/* <button onClick={this.handleToggleClick}>Toggle</button> */}
                {/* {isShown && <div>Modal window</div>} */}
                {/* {isShown && <Timer />} */}
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root'),
)