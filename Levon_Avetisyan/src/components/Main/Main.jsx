import './Main.css'
import React, {PureComponent} from 'react';

import PostForm from 'components/PostForm';
import ButtonLoadMore from 'components/ButtonLoadMore';

export default class Main extends PureComponent {

    render() {
        const { posts, users, loading, onLoadMore } = this.props;
        console.log(posts);
        return (
            <div className="Main">
                {posts.map((post) => <PostForm key={+post.postId}
                                               user={users.find((user) => user.id === post.userId)}
                                               title={post.title}
                                               body={post.body}
                                               postId={+post.postId}
                                               expanded={post.expanded}/>)}
                <ButtonLoadMore onLoadMore={onLoadMore} loading={loading}/>
            </div>
        )
    }
}