import React, { PureComponent, Fragment } from 'react';

import Post from 'components/Post';

export default class PostsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            text: [],
        }
    }

    componentDidMount() {
        const { match } = this.props;
        this.setState({ loading: true });
        fetch(`http://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((_text) =>
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    text: _text,
                }))
            );
    }

    render() {
        const { text, loading } = this.state;
        return (
            <Fragment>
                {loading ? 'Loading blog...' : <Post {...text}/>
                }
            </Fragment>
        );
    }
}
    
