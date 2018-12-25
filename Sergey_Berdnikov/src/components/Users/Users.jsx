import './Users.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

export default class Users extends PureComponent
{
    render() {
        const { text, loading, onLoadMore } = this.props;

        return (
            <div className="Users">
                <ul>
                    {text.map((elem, idx) => <li key={idx}>
                            <strong>{elem.id}</strong> {elem.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};
    
