import './Users.css';

import React, {PureComponent} from 'react';

export default class Users extends PureComponent {
    render() {
        const {users, loading, onLoadMore} = this.props;

        return (
                <div className="Users">
                    <h1>Users</h1>
                    {users.map((user, idx) => <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                        <div key={idx} className="media-body"><h5
                            className="mt-0">{user.name}</h5>{user.username}</div>
                    </div>)}
                    <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
                </div>
        )
    }
}