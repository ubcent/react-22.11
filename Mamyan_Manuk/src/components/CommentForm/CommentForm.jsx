import './CommentForm.css';

import React, {Component} from 'react';

export default class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        };
    }

    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSend = () => {
        const {onComment} = this.props;
        onComment(this.state);
        this.setState({
            author: '',
            message: '',
        })
    };

    render() {
        const {author, message} = this.state;
        return (
            <div className="CommentForm">
                <h1>LEAVE YOR COMMENT</h1>
                <input onChange={this.handleFieldChange} value={author} name="author" placeholder="Author" type="text"/><br/>
                <textarea onChange={this.handleFieldChange} value={message} name="message"
                          placeholder="Comment"></textarea>
                <button onClick={this.handleSend}>Send</button>
            </div>
        )
    }
}