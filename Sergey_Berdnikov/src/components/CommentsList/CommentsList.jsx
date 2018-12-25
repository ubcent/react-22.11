import './CommentsList.css';

//React импортируем в каждом файле
import React from 'react';

import { CardHeader, Card, Button, CardTitle, CardText } from 'reactstrap';

// сделаем stateless
export default function CommentsList(props) {
    const { comments, loading, onLoadMore } = props;

    return (
        <div className="CommentsList">
            <CardHeader>Comments</CardHeader>
            {comments.map((comment) => <Card body className="text-right">
                    <CardTitle>{comment.name}</CardTitle>
                    <CardText>{comment.body}</CardText>
                    <Button>Go to User</Button>
                </Card>
            )}
            <Button onClick={onLoadMore} disabled={loading}>Load more</Button>
        </div>
    );
};
    
