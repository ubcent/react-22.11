import React, {PureComponent, Fragment} from 'react';

import PostFormAction from 'components/PostFormAction';
import PostFormComments from 'components/PostFormComments';

import {connect} from 'react-redux';
import {load as loadComments} from 'actions/comments';
import {toggle as loadExpanded} from 'actions/posts';
import {postDelete} from 'actions/posts';

class PostFormCommentsContainer extends PureComponent {
    render() {
        const { comments, load, postDelete, postId, expanded} = this.props;
        return (
            <Fragment>
                <PostFormAction onClickDelete={postDelete} onHandleClick={load} postId={postId} expanded={expanded}/>
                <PostFormComments expanded={expanded} comments={comments} postId={postId}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.entities,
        comments: state.comments.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: (event) => {
            dispatch(loadComments(event));
            dispatch(loadExpanded(event));
        },
        postDelete: (event) => {
            dispatch(postDelete(event));
            },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormCommentsContainer);