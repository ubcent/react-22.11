import './CommentsNew.css';

import React, { PureComponent } from 'react';
import FetchingData from 'containers/FetchingData';
import FetchDataUrl from 'containers/FetchDataUrl';


export default class CommentsNew extends PureComponent {
  static defaultProps = { commentsList: [] }
  constructor(props) {
    super(props)
  }



  findAuthor = (articleAuthorId) => {
    const { authorItems } = this.props;
    const foundAuthor = authorItems.find((item) => { return item.id == articleAuthorId });
    return foundAuthor;
  }

  /*   isMoreComments() {
      const { commentsList, totalItems } = this.props;
      if (commentsList.length === totalItems) {retu}
  
    } */

  render() {
    const { commentsList, loading, onLoadMore, commentsTotalItems } = this.props;


    const isShowButton = (commentsList.length != commentsTotalItems) ? true : false;


    return (
      <div className="CommentsNew">
        <h2>List of Comments</h2>

        <ul className="comments-list">
          {commentsList.map((item, idx) => <li className="comment-item" key={idx}>
            <h5>Name: {item.name}</h5>
            <p>Text:</p>
            <p>{item.body}</p>
          </li>)}
        </ul>
        {(onLoadMore && isShowButton) ? <button onClick={() => { onLoadMore('Comments') }} disabled={loading}>MORE COMMENTS {String.fromCharCode(8594)}</button> : null}
      </div>
    );
  }
}
