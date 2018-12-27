import './Posts.css';

import React, {PureComponent} from 'react';

export default class Posts extends PureComponent {
    render() {
        const {posts, loading, onLoadMore} = this.props;

        return (
                <div className="Posts">
                    <h1>Posts</h1>
                    {posts.map((post, idx) => <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                        <div key={idx} className="media-body"><h5
                            className="mt-0">{post.title}</h5>{post.body}</div>
                    </div>)}
                    <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
                </div>
        )
    }
}