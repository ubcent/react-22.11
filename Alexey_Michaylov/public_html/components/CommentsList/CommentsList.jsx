import React from 'react';
import { Button } from 'reactstrap';
import Comment from 'components/Comment';
import Main from 'components/Main';

export default function CommentsList(props) {
    return (
        <Main head="Коментарии">
            {props.comments.map((comment, idx) => <Comment key={idx} {...comment} />)}
            <p className="text-center mb-4">
                <Button outline color="info" onClick={props.onLoadMore} disabled={props.loading}>LoadMore</Button>
            </p>
        </Main>
    )
}
