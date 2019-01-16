import React, { PureComponent, Fragment } from 'react';

import TopBlogers from "components/TopBlogers";
import {load as loadComments} from "actions/comments";
import {connect} from "react-redux";

class TopBlogersContainer extends PureComponent {

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
        {comments.length === 0 ? 'Loading' : <TopBlogers onLoadMore={load} blogers={comments} loading={loading}/>}
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

function mapDispatchToProps (dispatch, props) {
  return {
    load: () => dispatch(loadComments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBlogersContainer);