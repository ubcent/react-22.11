import './Comments.css';

import React, {PureComponent} from 'react';

export default class Comments extends PureComponent {
    render() {
        const {comments, loading, onLoadMore} = this.props;

        return (
            <div className="Comments">
                <h1>Comments</h1>
                {comments.map((comment, idx) => <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                    <div key={idx} className="media-body"><h5
                        className="mt-0">{comment.name}</h5>{comment.body}</div>
                </div>)}
                <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
            </div>
        )
    }
}