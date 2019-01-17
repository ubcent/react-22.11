import React from 'react';
import Main from 'components/Main';
import Blogpost from 'components/Blogpost';
import Paging from 'components/Paging';

export default function BlogpostList(props) {
    return (
        <Main head="Блог" second="blog">
            {props.posts.map((post) => <Blogpost key={post.id} postId={post.id} head={post.title} author={props.users.find((user) => user.id === post.userId)}>{post.body}</Blogpost>)}
            <Paging onTurnPage={props.onTurnPage} next={props.next} prev={props.prev}/>
        </Main>
    )
}
