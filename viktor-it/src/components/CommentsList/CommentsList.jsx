import './CommentsList.css';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CommentsList extends PureComponent {
  static propTypes = {
    comments: PropTypes.array,
    loading: PropTypes.bool,
    onLoadMore: PropTypes.func,
  };

  render(){
    const {comments, loading, onLoadMore} = this.props;  
    return(
      <div className="CommentsList">
        <ul>
          {comments.map((comments, idx) => <li key = {idx}>{comments.name}:{comments.body}</li>)}
        </ul>
        <button disabled = {loading} onClick = {onLoadMore}>Load more</button>
      </div>
    );
  };
};