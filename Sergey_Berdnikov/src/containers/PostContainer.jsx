import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load as loadPosts } from 'actions/posts';
import Post from 'components/Post';

class PostsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            text: [],
        }
    }

    componentDidMount() {
        const { load, text } = this.props;

        if (!text) {
            load();
        }
    }

    render() {
        const { text, loading } = this.props;
        return (
            <Fragment>
                {loading ? 'Loading post...' : <Post {...text}/>
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    const { match } = props;

    return {
        text: state.posts.entities.find((post) => post.id === +match.params.id)
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadPosts()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
