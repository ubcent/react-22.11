import React, {PureComponent, Fragment} from 'react';

import Comment from "components/Comment";
import {connect} from 'react-redux';
import {load as loadFetchData} from "actions/fetchData";

class CommentContainer extends PureComponent {

  componentDidMount() {
    const {load, comment} = this.props;
    if (!comment) {
    load();
    }
  }

  render() {
    const {comment, loading} = this.props;
    return (
      <Fragment>
        {loading ? 'Loading' : <Comment {...comment}/>}
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  const {match} = props;
  const comment= state.connection.entities.find((comment) => comment.id === +match.params.id);
  return {
    comment,
    loading: state.connection.loading,
  }
}

function mapDispatchToProps (dispatch, props) {
  return {
    load: () => dispatch(loadFetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);