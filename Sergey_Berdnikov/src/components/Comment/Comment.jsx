import './Comment.css';

//React импортируем в каждом файле
import React from 'react';

//stateless
export default function Comment(props) {
    const { name, email, body } = props;
    return (
        <div className="Comment">
            <h4>Name: </h4>
            <p>{name}</p>
            <h5>E-Mail:</h5>
            <p>{email}</p>
            <h6>Text:</h6>
            <p>{body}</p>
        </div>
    );
};
