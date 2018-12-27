import './Footer.css';

import React, {Component} from 'react';
import CommentForm from 'components/CommentForm';

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }

    handleComment = (comment) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comment])
        }));
    };

    render() {
        const {comments} = this.state;
        return (
            <div className="Footer">
                <ul>
                    {comments.map((comment, idx) => <li key={idx}>{comment.author}: {comment.message}</li>)}
                </ul>
                <CommentForm onComment={this.handleComment}/>
            </div>
        )
    }
}