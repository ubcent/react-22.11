import './Users.css';

import React, { PureComponent } from 'react';

export default class Users extends PureComponent {

    render() {
        const { users, loading, onLoadMore } = this.props;

        return (
            <div className="CommentsList">
                <ul>
                    {users.map((comment, idx) => <li key={idx}><strong>User: </strong>{comment.name} <strong>Message: </strong>{comment.email}</li>)}
                </ul>
                <button className ="opencomms" onClick={onLoadMore} disabled={loading}>Read More</button>
            </div>
        )
    }
}