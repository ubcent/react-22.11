import React from 'react';
import Blogpost from 'components/Blogpost';
import Paging from 'components/Paging';

export default function BlogpostList(props) {
    return (
        <section>
            {props.posts.map((post, idx) => <Blogpost key={idx} head={post.title}>{post.body}</Blogpost>)}
            <Paging onTurnPage={props.onTurnPage} next={props.next} prev={props.prev}/>
        </section>
    )
}
