import './Main.css'
import React, {PureComponent} from 'react';

import PostForm from 'components/PostForm';
import ButtonLoadMore from 'components/ButtonLoadMore';

export default class Main extends PureComponent {
    static defaultProps = {}
    
    render() {
        const { posts, users, loading, onLoadMore } = this.props;
        return (
            <div className="Main">
                {posts.map((post) => <PostForm key={post.id} user={users.find((user) => user.id === post.userId)}
                                               title={post.title} body={post.body}/>)}
                <ButtonLoadMore onLoadMore={onLoadMore} loading={loading}/>
            </div>
        )
    }
}