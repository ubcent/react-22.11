import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import CommentList from 'components/CommentsList';
import { load as loadComments } from 'actions/comments';

class CommentsListContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;

        load();
    }

    render() {
        const { comments, loading, load } = this.props;
        return (
            <Container>
                <Fragment>
                    {comments.length === 0 ? 'Loading...' : <CommentList onLoadMore={load} comments={comments} loading={loading} />}
                </Fragment>
            </Container>
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