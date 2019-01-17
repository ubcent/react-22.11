import React, { PureComponent } from 'react';

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
