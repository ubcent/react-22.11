import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import PostDetails from 'components/PostDetails';
import {load as loadBlog} from 'actions/blog';

class PostDetailsContainer extends PureComponent {
    componentDidMount() {
        const {load, post} = this.props;

        if (!post) {
            load();
        }
    }

    render() {
        const {post, loading} = this.props;
        return (
            <div>
                {loading ? <h4 className="mt-4">Loading...</h4> :
                    <PostDetails {...post}/>}
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const {match} = props;
    const post = state.blog.posts.find((post) => post.id === +match.params.id);
    return {
        post,
        loading: state.blog.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => dispatch(loadBlog()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
