import React, { PureComponent, Fragment } from 'react';
import {connect} from 'react-redux';
import {load as loadFetchData} from 'actions/fetchData';

import CommentsList from 'components/CommentsList'

class CommentsListContainer extends PureComponent {

  componentDidMount() {
    const {load, comments} = this.props;
    if (comments.length === 0) {
    load();
    }
  }

  render() {
    const { comments, loading, load} = this.props;
    return (
      <Fragment>
        {comments.length === 0 ? 'Loading' : <CommentsList onLoadMore={load} comments={comments} loading={loading} />  }
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    comments: state.connection.entities,
    loading: state.connection.loading,
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
  load: () => dispatch(loadFetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);