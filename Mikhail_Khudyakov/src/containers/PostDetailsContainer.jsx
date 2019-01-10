import React, {PureComponent} from 'react';

import PostDetails from 'components/PostDetails';

export default class PostDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            post: {},
        }
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((_post) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    post: _post,
                }))
            });
    }

    render() {
        const {post, loading} = this.state;
        return (
            <div>
                {loading ? <h4 className="mt-4">Loading...</h4> :
                    <PostDetails {...post}/>}
            </div>
        )
    }
}
