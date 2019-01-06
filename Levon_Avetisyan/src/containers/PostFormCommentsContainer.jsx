import React, {PureComponent, Fragment} from 'react';

import PostFormAction from 'components/PostFormAction';
import PostFormComments from 'components/PostFormComments';

export default class PostFormCommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            comments: []
        };
    }


    handleExpandClick = () => {
        this.setState((prevState) => ({expanded: !prevState.expanded}));
        const { postId } = this.props;
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((_comments) => {
                this.setState(() => ({
                    comments: _comments,
                }))
            });
    };


    render() {
        const {expanded, comments} = this.state;
        return (
            <Fragment>
                <PostFormAction onHandleClick={this.handleExpandClick} expanded={expanded}/>
                <PostFormComments expanded={expanded} comments={comments}/>
            </Fragment>
        )
    }
}