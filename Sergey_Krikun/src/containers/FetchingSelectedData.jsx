import React, { PureComponent, Fragment } from 'react';
import MainArticle from 'components/MainArticle';
import CommentsNew from 'components/CommentsNew';
import PageOfArticle from 'components/PageOfArticle';
import UserService from 'containers/UserService';
import UserPage from 'components/UserPage';
import { finished } from 'stream';

export default class FetchingSelectedData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      posts: [],
      comments: [],
      users: [],
      page: 1,
    }


  }

  fetchData = (stringUrl, name) => {

    this.setState({ loading: true });

    const stringOfUrl = `https://jsonplaceholder.typicode.com${stringUrl}`;


    fetch(stringOfUrl)
      .then((response) => {
        return response.json();
      })
      .then((_data) => {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          [`${name}`]: prevState[`${name}`].concat(_data),
        }));
      })
      .catch(error => this.setState(prevState => ({
        ...prevState,
        error,
        loading: false,
      })));
  }



  componentDidMount() {
    const { postsStringUrl, commentsStringUrl, usersStringUrl }
      = this.props;

    if (postsStringUrl) {
      this.fetchData(postsStringUrl, 'posts');
       this.setState((prevState) => (
         {
           ...prevState,
           page: prevState.page + 1,
         }))
    }
    if (commentsStringUrl) {
      this.fetchData(commentsStringUrl, 'comments');
    }
    if (usersStringUrl) {
      this.fetchData(usersStringUrl, 'users');
    }
  }

  onLoadMore = () => {
    const { postsStringUrl, usersStringUrl } = this.props;
    const { page } = this.state;
    const postsStringWithPages = `${postsStringUrl}&_page=${page}`;

    this.setState((prevState) => (
      {
        ...prevState,
        page: prevState.page + 1,
      }));
  
    this.fetchData(postsStringWithPages, 'posts');
    this.fetchData(usersStringUrl, 'users');

  }

  render() {
    const { mainPage, commentsPage, pageOfArticle, articleNumber, getUsers,
      userPage, error, postsStringUrl } = this.props;
    const { comments, loading, users, posts } = this.state;

    if (error) {
      return (<p>'The error', {error}</p>);
    }
    if (userPage == "true") {
      return (
        <Fragment>
          {(users.length === 0)
            ? 'Loading...' :
            <UserPage articleItems={posts} commentsItems={comments} userItems={users} />}
        </Fragment>
      )
    }
    if (getUsers == "true") {
      return (
        <Fragment>
          {(users.length === 0) ? 'Loading...' :
            <UserService userObject={users[0]} />}
        </Fragment>
      )
    }
    if (commentsPage == 'true') {
      return (
        <Fragment>
          {/*   <MainArticle articleItems={this.state.posts}
              authorItems={this.state.users} /> */}

          {(comments.length === 0) ? 'Loading...' : <CommentsNew commentsList={comments} authorItems={users}></CommentsNew>}
        </Fragment>
      );
    }
    if (mainPage == 'true') {
      return (
        <Fragment>
          {/*   <MainArticle articleItems={this.state.posts}
                authorItems={this.state.users} /> */}

          {(posts.length === 0 || users.length === 0) ? 'Loading...' : <MainArticle articleItems={posts} loading={loading} onLoadMore={this.onLoadMore} authorItems={users}></MainArticle>}
        </Fragment>
      );
    }
    if (pageOfArticle == 'true') {
      return (
        <Fragment>
          {(posts.length === 0 || users.length === 0 || comments.length === 0)
            ? 'Loading...'
            : <PageOfArticle articleItems={posts} authorItems={users}
              comments={comments} numberOfArticle={articleNumber}></PageOfArticle>}
        </Fragment>
      );
    }



  };

}



