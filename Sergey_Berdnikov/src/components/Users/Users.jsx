import './Users.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Users extends PureComponent {
    render() {
        const { text } = this.props;

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
    }
};
