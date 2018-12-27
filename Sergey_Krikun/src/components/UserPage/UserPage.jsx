import './UserPage.css';

import React, { PureComponent } from 'react';
import CommentsNew from 'components/CommentsNew';
import MainArticle from 'components/MainArticle';

export default class UserPage extends PureComponent {
  static defaultProps = {}

  render() {
    const { articleItems, commentsItems, userItems, onLoadMore, commentsTotalItems } = this.props;

    return (
      <div className="UserPage">
        <div className="user-info-heading">
          <h2>Author page</h2>
          {userItems.map((item, idx) => {
            return (
              <div className="user-page_item" key={idx}>
                <p className="user-page_name">
                  Name: {item.name}
                </p>
                <p className="user-page_user-name">
                  User name: {item.username}
                </p>
                <p className="user-page_email">
                  Email: {item.email}
                </p>
              </div>);
          })}
        </div>
        {(articleItems.length > 0) ?
          <MainArticle
            articleItems={articleItems}
            authorItems={userItems}
          />
          : null}
        {(commentsItems.length > 0) ?
          <CommentsNew
            commentsList={commentsItems}
            commentsTotalItems={commentsTotalItems}
          />
          : null}
      </div>
    );
  }
}
