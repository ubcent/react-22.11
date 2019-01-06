import './Post.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

export default class Post extends PureComponent {

    render() {
        const { title, body } = this.props;

        return (
            <div className="BlogOne">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        );
    }
};
    
