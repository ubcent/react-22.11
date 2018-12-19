import './MainArticle.css';

import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

export default class MainArticle extends Component {
  static defaultProps = {};

  render() {
    const { articleItems } = this.props;

    return (
      <div className="MainArticle">
        {articleItems.map(
            (item) => <div key={item.key} className="mainArticle-item">
              <a href={item.href} className="mainArticle_item__link item" >
                <h2 className="mainArticle_item_title">{item.title}</h2>
                <h3 className="mainArticle_item_sub-title">{item.content}</h3>
              </a><p className="mainArticle-author-string">
              Posted by <a className="mainArticle-author__link"
                  href={item.authorHref}>{item.author}</a> on
                {item.articleDate}</p><hr /></div>)}
        <Badge className="mainArticle-olderPosts__link" href="#" >
          OLDER POSTS {String.fromCharCode(8594)}</Badge>
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
