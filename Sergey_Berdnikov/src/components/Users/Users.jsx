import './Users.css';

//React импортируем в каждом файле
import React from 'react';
import { Link } from 'react-router-dom';

export default function Users(props) {
    const { text } = props;

        return (
            <div className="Users">
                <h6>USERS:</h6>
                <ul>
                    {text.map((elem) => <li key={elem.id}>
                        <Link to={`/users/${elem.id}`}>{elem.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
};
