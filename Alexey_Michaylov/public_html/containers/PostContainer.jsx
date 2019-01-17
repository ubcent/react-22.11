import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from 'components/Post';
import { load as loadPosts } from 'actions/posts';
import { load as loadUsers } from 'actions/users';
import { load as loadComments } from 'actions/commentsPost';

class PostContainer extends PureComponent {
    componentDidMount() {
        const { post, users, comments, loadPosts, loadUsers, loadComments } = this.props;
        if(!post) {
            loadPosts();
        }
        if(users.length === 0) {
            loadUsers();
        }
        if(comments.length === 0) {
            loadComments();
        }
    }

    render() {
        const { post, users, comments } = this.props;
        return (
            <Fragment>
                {post && users.length > 0 ? <Post post={post} author={users.find((user) => user.id === post.userId)} comments={comments} /> : 'Loading...'}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    const { match } = props;
    const post = state.posts.entities.find((post) => post.id === +match.params.id);
    const comments = state.commentsPost.entities.filter((comment) => comment.postId === +match.params.id);
    return {
        post,
        comments,
        users: state.users.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    const { match } = props;
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadUsers: () => dispatch(loadUsers()),
        loadComments: () => dispatch(loadComments(match.params.id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
