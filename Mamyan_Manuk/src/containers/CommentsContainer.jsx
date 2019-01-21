import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';

import Comments from 'components/Comments';
import {load as loadComments} from 'actions/comments';

 class CommentsContainer extends PureComponent {

    componentDidMount() {
        const {load} = this.props;
        load();
    }



    render() {
        const {comments, loading} = this.props;
        return (
            <Fragment>
                {comments.length === 0 ? 'Loading...' : <Comments comments = {comments} loading = {loading} onLoadMore = {this.fetchData} />}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        comments: state.comments.entities,
        loading: state.comments.loading
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadComments()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);