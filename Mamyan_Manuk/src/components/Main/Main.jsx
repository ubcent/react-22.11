import './Main.css';
import {Switch, Route, Link} from 'react-router-dom';

import React, {Component} from 'react';
import Content from "components/Content/Content";
import Comments from 'containers/CommentsContainer'
import Users from 'containers/UsersContainer'
import Posts from 'containers/PostsContainer'

export default class Main extends Component {
    render() {
        return (
            <div className="mycontainer">
                <div className="mysideNav">
                    <div className="block1">
                        <h3><a href="#">CODING</a></h3>
                        <a href="#">CSS</a>
                        <a href="#">HTML</a>
                        <a href="#">JAVA SCRIPT</a>
                        <a href="#">REACT</a>
                    </div>

                    <div className="block2">
                        <h3><a href="#">DESIGN</a></h3>
                        <a href="#">WEB DESIGN</a>
                        <a href="#">RESPONSIVE</a>
                        <a href="#">TYPOGRAPHY</a>
                        <a href="#">INSPIRATION</a>
                    </div>

                    <div className="block3">
                        <h3><a href="#">MOBILE</a></h3>
                        <a href="#">iPHONE & iPAD</a>
                        <a href="#">ANDROID</a>
                        <a href="#">DESIGN PATTERNS</a>
                        <a href="#">OTHER</a>
                    </div>

                    <div className="block4">
                        <h3><a href="#">JS LIBRARIES</a></h3>
                        <a href="#">jQuery</a>
                        <a href="#">LayerJS</a>
                        <a href="#">Wired Elements</a>
                        <a href="#">Signale</a>
                    </div>

                    <div className="block5">
                        <h3><a href="#">JS FRAMEWORKS</a></h3>
                        <a href="#">React JS</a>
                        <a href="#">Vue JS</a>
                        <a href="#">Angular JS</a>
                        <a href="#">Backbone JS</a>
                        <a href="#">Polymer </a>
                        <a href="#">Meteor </a>
                    </div>
                </div>
                <div>
                    <div className="pageNav">
                        <Link to="/">Home</Link>{' '}
                        <Link to="/posts">Posts</Link>{' '}
                        <Link to="/comments">Comments</Link>{' '}
                        <Link to="/users">Users</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Content}/>
                        <Route exact path="/posts" component={Posts}/>
                        <Route exact path="/users" component={Users}/>
                        <Route exact path="/comments" component={Comments}/>
                    </Switch>
                </div>
            </div>
        )
    }
}