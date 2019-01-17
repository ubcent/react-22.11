import React, { PureComponent, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { load as loadComments } from 'actions/comments';
import Comment from 'components/Comment';


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
            <Container>
                <Fragment>
                    {loading ? 'Loading...' : <Comment {...comment} />}
                </Fragment>
            </Container>
        )
    }
}

function mapStateTopProps(state, props) {
    const { match } = props;

    const comment = state.comments.entities.find((comment) => comment.id === +match.params.id);
    return {
        comment,
        loading: state.comments.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadComments())
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(CommentContainer);