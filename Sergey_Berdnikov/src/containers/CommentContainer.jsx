import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Comment from 'components/Comment';
import { load as loadComments } from 'actions/comments';

class CommentContainer extends PureComponent {
    componentDidMount() {
        const { load, comment } = this.props;

        if (!comment) {
            load();
        }
    }

    render() {
        const { comment, loading } = this.props;
        return (
            <Fragment>
                {loading ? 'Loading comment...' : <Comment {...comment}/>}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    const { match } = props;

    return {
        comment: state.comments.entities.find((comment) => comment.id === +match.params.id)
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadComments()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);