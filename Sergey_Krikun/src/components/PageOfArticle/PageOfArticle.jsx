import './PageOfArticle.css';

import React, { PureComponent } from 'react';
import CommentsNew from 'components/CommentsNew';

export default class PageOfArticle extends PureComponent {
  static defaultProps = {}
  constructor(props) {
    super(props);
  }

  findAuthor = (articleAuthorId) => {
    const { authorItems } = this.props;
    const foundAuthor = authorItems.find((item) => { return item.id == articleAuthorId });
    return foundAuthor;
  }



  findComments = (id) => {
    const { comments } = this.props;

    const foundComments = comments.filter((item) => { if (item.postId == id) { return true } });

    return foundComments;
  }



  render() {
    const { articleItems, authorItems, numberOfArticle, onLoadMore, commentsTotalItems } = this.props;
    const foundArticle = articleItems.find((item) => {
      return item.id == numberOfArticle
    });
    const foundComments = this.findComments(numberOfArticle);

    return (
      <div className="PageOfArticle">
        <h2>Article 1 with comments</h2>
        <div className="PageOfArticle-item">
          <h3 className="PageOfArticle_item_title">{foundArticle.title}</h3>
          <p className="PageOfArticle-author-string">
            Posted by <a className="PageOfArticle-author__link"
              href={`/user${this.findAuthor(foundArticle.userId).id}`}> {this.findAuthor(foundArticle.userId).name}</a></p>
          <p className="PageOfArticle_item_sub-title">{foundArticle.body}</p>
        </div>
        <CommentsNew commentsList={foundComments}
          commentsTotalItems={commentsTotalItems}
          onLoadMore={onLoadMore} />
      </div>
    );
  }
}
