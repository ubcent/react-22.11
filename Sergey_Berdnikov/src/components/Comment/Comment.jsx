import './Comment.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {

    render() {
        const { name, email, body } = this.props;
        console.log(this.props);
        return (
            <div className="Comment">
                <h2>Name: {name}</h2>
                <h3>E-Mail: {email}</h3>
                <h4>Text: {body}</h4>
            </div>
        );
    }
};
    
