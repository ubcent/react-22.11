import React, { PureComponent } from 'react';
import './User.css';

export default class User extends PureComponent {
    static defaultProps = {}

    render() {
        const { name, phone, website } = this.props;

        return (
            < div className="User">
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        )
    }
}
