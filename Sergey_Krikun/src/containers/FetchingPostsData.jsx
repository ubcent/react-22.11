import React, { PureComponent, Fragment } from 'react';
import MainArticle from 'components/MainArticle';
import PageOfArticle from 'components/PageOfArticle';

export default class FetchingData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
      page: 0,
    }

  }

  fetchLimitedData = (limit) => {
    const page = this.state;

    this.setState({ loading: true })
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((_data) => {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          posts: prevState.posts.concat(_data),
        }));
      })
  }


  fetchOneData = (idOfItem) => {
    const page = this.state;

    this.setState({ loading: true })
    fetch(`https://jsonplaceholder.typicode.com/posts/${idOfItem}/`)
      .then((response) => {
        return response.json();
      })
      .then((_data) => {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          posts: prevState.posts.concat(_data),
        }));
      })
  }

  componentDidMount() {
    const { postId } = this.props;

    if (postId) {
      this.fetchOneData(postId);
    } else {
      fetchLimitedData(10);
    }
  }

  render() {
    const { mainPage, commentsPage, pageOfArticle, articleNumber } = this.props;
    const { loading, users, posts } = this.state;


    if (mainPage == 'true') {
      return (
        <Fragment>
          {(posts.length === 0 || users.length === 0) ? 'Loading...' : <MainArticle articleItems={posts} authorItems={users}></MainArticle>}
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