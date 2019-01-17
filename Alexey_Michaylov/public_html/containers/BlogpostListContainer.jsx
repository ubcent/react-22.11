import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import BlogpostList from 'components/BlogpostList';
import { load as loadPosts } from 'actions/posts';
import { load as loadUsers } from 'actions/users';

class BlogpostListContainer extends PureComponent {
    componentDidMount(e) {
        const { users, loadPosts, loadUsers } = this.props;
        loadPosts(e);
        if(users.length === 0) {
            loadUsers();
        }
    }

    render() {
        const { posts, users, next, prev, loadPosts } = this.props;
        return (
            <Fragment>
                {posts.length === 0 ? 'Loading...' : <BlogpostList onTurnPage={loadPosts} posts={posts} users={users} next={next} prev={prev} />}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.entities,
        next: state.posts.next,
        prev: state.posts.prev,
        users: state.users.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadPosts: (event) => dispatch(loadPosts(event)),
        loadUsers: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogpostListContainer);
