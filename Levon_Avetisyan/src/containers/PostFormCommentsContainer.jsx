import React, {PureComponent, Fragment} from 'react';

import PostFormAction from 'components/PostFormAction';
import PostFormComments from 'components/PostFormComments';

export default class PostFormComments extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    // fetchComments = () => {
    //     const { post } = this.props;
    //     fetch(`http://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    //         .then((response) => response.json())
    //         .then((_comments) => {
    //             this.setState(() => ({
    //                 comments: _comments,
    //             }))
    //         });
    // };

    render() {

        return (
            <Fragment>
                <PostFormAction/>
                <PostFormComments/>
            </Fragment>
        )
    }
}