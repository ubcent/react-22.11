import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';
import { load as loadComments } from 'actions/comments';

class CommentsListContainer extends PureComponent {
  componentDidMount() {
    const { load } = this.props;
    
    load();
  }


  render() {
    const { comments, loading } = this.props;
    return (
      <Fragment>
        {comments.length === 0 ? 'Loading...' : <CommentsList onLoadMore={this.fetchData} comments={comments} loading={loading} />}
      </Fragment>
    )
  }  
}

function mapStateToProps(state, props) {
  return {
    comments: state.comments.entities,
    loading: state.comments.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    load: () => dispatch(loadComments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
