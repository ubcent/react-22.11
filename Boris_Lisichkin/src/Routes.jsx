import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentsList from 'containers/CommentsListContainer';
import UserContainer from 'containers/UserContainer';

export default class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomeContainer} />
        <Route path='/home' component={HomeContainer} />
        <Route path='/blog' component={BlogContainer} />
        <Route path='/comment' component={CommentsList} />
        <Route path='/user' component={UserContainer} />
      </Switch>
    );
  }
}