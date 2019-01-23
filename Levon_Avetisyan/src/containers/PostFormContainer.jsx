import React, {PureComponent, Fragment} from 'react';

import {connect} from 'react-redux';
import {load as loadPosts} from 'actions/posts';
import {load as loadUsers} from 'actions/users';

import Main from 'components/Main';

class PostFormContainer extends PureComponent {
    componentDidMount() {
        const {loadPosts, loadUsers, posts} = this.props;
        if (posts.length === 0) {
            loadPosts();
            loadUsers();
        }
    }

    render() {
        const {posts, users, loading, loadPosts} = this.props;
        return (
            <Fragment>
                <div>
                    {posts.length === 0 || users.length === 0 ? 'Loading' :
                        <Main onLoadMore={loadPosts} posts={posts} users={users} loading={loading}/>}
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.entities,
        loading: state.posts.loading,
        users: state.users.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadUsers: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);