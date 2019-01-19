import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Blog from 'components/Blog';
import {load as loadBlog} from 'actions/blog';
import {Delete} from 'actions/deletepage';

class BlogContainer extends PureComponent {
    componentDidMount() {
        const {load} = this.props;
        load();
    }

    componentWillUnmount() {
        const {Delete, posts} = this.props;
        posts.splice(5);
        Delete();
    }

    render() {
        const {posts, loading, load} = this.props;
        return (
            <div>
                {posts.length === 0 ? <h4 className="mt-4">Loading...</h4> :
                    <Blog onLoadMore={load} posts={posts} loading={loading}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.blog.posts,
        loading: state.blog.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => dispatch(loadBlog()),
        Delete: () => dispatch(Delete()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
