import './CommentsList.css';

//React импортируем в каждом файле
import React from 'react';
import { withRouter, NavLink as RRNavLink } from 'react-router-dom';

import { CardHeader, Card, Button, CardTitle, CardText } from 'reactstrap';

// сделаем stateless
function CommentsList(props) {
    const { comments, loading, onLoadMore, match } = props;

    return (
        <div className="CommentsList">
            <CardHeader>Comments</CardHeader>
            {comments.map((comment) => <Card body className="text-right">
                    <CardTitle>{comment.name}</CardTitle>
                    <CardText>{comment.body}</CardText>
                <Button tag={RRNavLink} to={`/comments/${comment.id}`}>Go to User</Button>
                </Card>
            )}
            <Button onClick={onLoadMore} disabled={loading}>Load more</Button>
        </div>
    );
};

export default withRouter(CommentsList);