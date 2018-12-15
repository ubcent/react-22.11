
import './CommentsForm.css';

//React импортируем в каждом файле
import React, { Component } from 'react';

export default class CommentsForm extends Component
    {
        static defaultProps = {};

        constructor(props) {
            super(props);

            this.state = {
                author: '',
                message: '',
            };
        }

        handleFieldChange = (event) => {
            this.setState ({

            })
        };

        handleSend = (event) => {
            console.log(this.state);
        };

        render() {
            const {author, message} = this.state;

            return (
               <div className="CommentsForm">
                   <input nam="author" onChange={this.handleFieldChange} value={author} placeholder="Author" type="text"/>
                   <br/>
                   <textarea name="message" onChange={this.handleFieldChange} value={message} placeholder="Message"></textarea>
                   <br/>
                   <button onClick={this.handleSend}>Send</button>
               </div>
            );
        }
    };
    
