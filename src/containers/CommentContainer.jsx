import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import Comment from 'components/Comment';
import { load as loadComments } from 'actions/comments';

class CommentContainer extends PureComponent {
  componentDidMount() {
    const { load, comment } = this.props;
    
    if(!comment) {
      load();
    }
  } 

  render() {
    const { comment, loading } = this.props;
    return (
      <Fragment>
        {loading ? 'Loading...' : <Comment {...comment} />}
      </Fragment>
    )
  }  
}

function mapStateToProps(state, props) {
  const { match } = props;
  
  const comment = state.comments.entities.find((comment) => comment.id === +match.params.id);
  return {
    comment,
    loading: state.comments.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    load: () => dispatch(loadComments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);