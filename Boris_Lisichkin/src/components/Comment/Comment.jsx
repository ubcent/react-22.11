import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
    static defaultProps = {}

    render() {
        const { name, body } = this.props;

        return (
           <div className="Comment">
           <h2>{name}</h2>
           <p>{body}</p>
           </div>
        )
    }
}
