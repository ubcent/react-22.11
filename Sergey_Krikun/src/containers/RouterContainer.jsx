import React, { PureComponent, Component, Fragment } from 'react';
import MainArticle from 'components/MainArticle';
import CommentsNew from 'components/CommentsNew';
import PageOfArticle from 'components/PageOfArticle';
import UserService from 'containers/UserService';
import UserPage from 'components/UserPage';

import FetchingSelectedData from 'containers/FetchingSelectedData';
import { randomBytes } from 'crypto';

export default class RouterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPost: [],
    }
  }

  render() {
    const { match } = this.props;



    switch (match.params.nameOfPage) {
      case "pageOfArticle":

        /*         this.setState(() => (
                  {
                    numberOfPost: match.params.numberOfPost,
                  })
                ) */


        return (
          <FetchingSelectedData
            postsStringUrl={`/posts?&id=${match.params.numberOfPost}`}
            usersStringUrl={`/users/${match.params.userId}`}
            commentsStringUrl=
            {`/comments?postId=${match.params.numberOfPost}&_limit=${match.params.limitOfComments}`}
            articleNumber={match.params.numberOfPost}
            pageOfArticle="true"
          />
        )
      case "authorPage":

        return (
          <FetchingSelectedData getUsers="true"
            usersStringUrl={`/users?id=${match.params.userId}`}
          />
        )
      default:
        return (
          <FetchingSelectedData
            postsStringUrl='/posts?&_limit=10'
            usersStringUrl="/users"
            mainPage="true"
          />)
    }
    return (

      <div>sdfsdfs</div>
    )
  }

}