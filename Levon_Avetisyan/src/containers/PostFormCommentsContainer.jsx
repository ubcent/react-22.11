import React, {PureComponent, Fragment} from 'react';

import PostFormAction from 'components/PostFormAction';
import PostFormComments from 'components/PostFormComments';

import {connect} from 'react-redux';
import {load as loadPosts} from 'actions/posts';
import {load as loadUsers} from 'actions/users';
import {load as loadComments} from 'actions/comments';

class PostFormCommentsContainer extends PureComponent {

    render() {
        const {expanded, comments, loadComments, postId} = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <PostFormAction onHandleClick={loadComments} expanded={expanded}/>
                <PostFormComments expanded={expanded} comments={comments.filter(comment => comment.postId === postId)}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.entities,
        loading: state.posts.loading,
        users: state.users.entities,
        expanded: state.comments.expanded,
        comments: state.comments.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadUsers: () => dispatch(loadUsers()),
        loadComments: () => dispatch(loadComments()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormCommentsContainer);