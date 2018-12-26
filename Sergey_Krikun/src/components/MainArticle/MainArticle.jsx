import './MainArticle.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainArticle extends Component {
  static defaultProps = {
    articleItems: [],
    authorItems: []
  };

  findAuthor = (articleAuthorId) => {
    const { authorItems } = this.props;
    const foundAuthor = authorItems.find((item) => { return item.id == articleAuthorId });
    return foundAuthor;
  }

  render() {
    const { articleItems, onLoadMore, loading } = this.props;
    console.log(onLoadMore);

    return (
      <div className="MainArticle">
        {articleItems.map(
          (item, idx) => <div key={idx} className="mainArticle-item">
            <a href={`/posts${item.id}`} className="mainArticle_item__link item" >
              <h2 className="mainArticle_item_title">{item.title}</h2>
              <h3 className="mainArticle_item_sub-title">{item.body}</h3>
              <p>Article number: {item.id}</p>
            </a><p className="mainArticle-author-string">
              Posted by <a className="mainArticle-author__link"
                href={`/user${this.findAuthor(item.userId).id}`}> {this.findAuthor(item.userId).name}</a></p><hr /></div>)}
        {onLoadMore ? <button onClick={onLoadMore} disabled={loading}>OLDER POSTS {String.fromCharCode(8594)}</button> : null}

        <br />
        <br />
      </div>
    );
  }
}

MainArticle.propTypes = {
  /**
  * an array of objects with parameters(title, content, author, articleDAte)
  * for articles on index page
  */
  articleItems: PropTypes.array,
};
