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
      pageComments: 1,
      postsTotalItems: 0,
      commentsTotalItems: 0,
      usersTotalItems: 0,
    };
  }

  fetchData = (stringUrl, name) => {
    this.setState({ loading: true });

    const stringOfUrl = `https://jsonplaceholder.typicode.com${stringUrl}`;


    fetch(stringOfUrl)
      .then((response) => {
        if (response.ok) {
          const res = response.headers.get('x-total-count');
          this.setState(() => ({ [`${name}TotalItems`]: res }));
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((_data) => {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          [`${name}`]: prevState[`${name}`].concat(_data),
        }));
      })
      .catch((error) => this.setState((prevState) => ({
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
      this.addPage();
    }
    if (commentsStringUrl) {
      this.fetchData(commentsStringUrl, 'comments');
      this.addPage('Comments');
    }
    if (usersStringUrl) {
      this.fetchData(usersStringUrl, 'users');
    }
  }

  onLoadMore = (content) => {
    const { postsStringUrl, usersStringUrl, commentsStringUrl } = this.props;
    const { page, pageComments } = this.state;
    const postsStringWithPages = `${postsStringUrl}&_page=${page}`;


    if (content == 'Comments') {
      const commentsStringWithPages =
        `${commentsStringUrl}&_page=${pageComments}`;
      this.addPage(content);
      this.fetchData(commentsStringWithPages, 'comments');
      return;
    }

    this.addPage();
    this.fetchData(postsStringWithPages, 'posts');
    this.fetchData(usersStringUrl, 'users');
  }

  addPage = (componentName = '') => {
    this.setState((prevState) => (
      {
        ...prevState,
        [`page${componentName}`]: prevState[`page${componentName}`] + 1,
      }));
  }

  render() {
    const { mainPage, commentsPage, pageOfArticle, articleNumber, getUsers,
      userPage, postsStringUrl } = this.props;
    const { comments, loading, users, posts, commentsTotalItems, error } = this.state;

    if (error) {
      return (<p>The error, {error}</p>);
    }
    if (userPage == 'true') {
      return (
        <Fragment>
          {(users.length === 0) ? 'Loading...' :
            <UserPage
              articleItems={posts}
              commentsItems={comments}
              userItems={users}
              commentsTotalItems={commentsTotalItems}
            />
          }
        </Fragment>
      );
    }
    if (getUsers == 'true') {
      return (
        <Fragment>
          {(users.length === 0) ? 'Loading...' :
            <UserService
              userObject={users[0]}
            />
          }
        </Fragment>
      );
    }
    if (commentsPage == 'true') {
      return (
        <Fragment>
          {(comments.length === 0) ? 'Loading...' :
            <CommentsNew
              commentsList={comments}
              onLoadMore={this.onLoadMore}
              authorItems={users}
              commentsTotalItems={commentsTotalItems}
            />
          }
        </Fragment>
      );
    }
    if (mainPage == 'true') {
      return (
        <Fragment>
          {(posts.length === 0 || users.length === 0) ? 'Loading...' :
            <MainArticle
              articleItems={posts}
              loading={loading}
              onLoadMore={this.onLoadMore}
              authorItems={users}
            >
            </MainArticle>
          }
        </Fragment>
      );
    }
    if (pageOfArticle == 'true') {
      return (
        <Fragment>
          {(posts.length === 0 || users.length === 0 || comments.length === 0)
            ? 'Loading...' :
            <PageOfArticle
              articleItems={posts}
              authorItems={users}
              comments={comments}
              numberOfArticle={articleNumber}
              onLoadMore={this.onLoadMore}
              commentsTotalItems={commentsTotalItems}>
            </PageOfArticle>}
        </Fragment>
      );
    }
  };
}


