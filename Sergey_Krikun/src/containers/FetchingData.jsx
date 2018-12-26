import React, { PureComponent, Fragment } from 'react';
import MainArticle from 'components/MainArticle';
import CommentsNew from 'components/CommentsNew';
import PageOfArticle from 'components/PageOfArticle';

export default class FetchingData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
      comments: [],
      users: [],
      page: 0,
    }

  }

  fetchData = (name, limit) => {
    const page = this.state;

    this.setState({ loading: true })
    fetch(`https://jsonplaceholder.typicode.com/${name}?_limit=${limit}`)
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
  }



  componentDidMount() {
    /*  const fetchPromise = new Promise((resolve, reject) => {
       this.fetchData('posts', 40);
     })
 
     fetchPromise
       .then(
         resolve => {
           this.fetchData('comments', 10);
         }
       )
       .then(
         resolve => {
           this.fetchData('users', 4);
         }
       ) */

    this.fetchData('posts', 10);
    this.fetchData('users', 4);
    this.fetchData('comments', 10);
  }

  render() {
    const { mainPage, commentsPage, pageOfArticle, articleNumber } = this.props;
    const { comments, loading, users, posts } = this.state;


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
    if (commentsPage == 'true') {
      return (
        <Fragment>
          {/*   <MainArticle articleItems={this.state.posts}
              authorItems={this.state.users} /> */}
          {comments.length === 0 ? 'Loading...' : <CommentsNew commentsList={comments} loading={loading}></CommentsNew>}
        </Fragment>
      );
    }




  };

}



