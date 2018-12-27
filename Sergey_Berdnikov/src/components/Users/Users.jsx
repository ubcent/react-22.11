import './Users.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

import { Button } from 'reactstrap';

export default class Users extends PureComponent
{
    render() {
        const { text, loading, onLoadNext } = this.props;

        return (
            <div className="Users">
                USER:
                <ul>
                    {text.map((elem, idx) => <li key={idx}>
                            <strong>{elem.id}</strong> {elem.name}
                        <br/>
                        Tel: {elem.phone}
                        </li>
                    )}
                </ul>
                <Button disabled={loading} onClick={onLoadNext}>Next</Button>
            </div>
        );
    }
};
    
