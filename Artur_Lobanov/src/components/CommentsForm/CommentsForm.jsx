
import './CommentsForm.css';

import React, { Component } from 'react';

export default class CommentsForm extends Component {

    static defaultProps = {}

    constructor(props){
        super(props);

        this.state = {
            author: '',
            message: '',
        };
    }

    // handleAuthor = () => {
    //     this.setState({ author: event.target.value });
    // }

    // handleMessage = () => {
    //     this.setState({ message: event.target.value });
    // }

    // handleFieldChange = (event) => {
    //     this.setState({author: event.target.value});
    // }

    handleFieldChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSend = () => {
        const { onComment } = this.props;
        onComment(this.state);
        this.setState({message: ''})
    }

    render() {
        const { author, message } = this.state;
        return (
            <div className="CommentsForm">
                <input name="author" onChange={this.handleFieldChange} value={author} placeholder="Author" type="text"/><br/>
                <textarea name="message" onChange={this.handleFieldChange} value={message} placeholder="Message" id="" cols="30" rows="10"></textarea><br/>
                <button onClick={this.handleSend}>Send</button>
            </div>
        )
    }
}
