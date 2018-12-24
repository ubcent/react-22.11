import './CommentsList.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

import { CardBody, CardHeader, Card, Button, CardTitle, CardText } from 'reactstrap';

export default class CommentsList extends PureComponent
{
    render() {
        const { comments, loading, onLoadMore } = this.props;

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
    }
};
    
