import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';

import Posts from 'components/Posts';
import {load as loadPosts} from 'actions/posts';


 class PostsContainer extends PureComponent {


    componentDidMount() {
        const {load} = this.props;
        load();
    }

    render() {
        const {posts, loading} = this.props;
        return (
            <Fragment>
                {posts.length === 0 ? 'Loading...' : <Posts posts = {posts} loading = {loading} onLoadMore = {this.fetchData} />}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        posts: state.posts.entities,
        loading: state.posts.loading
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);