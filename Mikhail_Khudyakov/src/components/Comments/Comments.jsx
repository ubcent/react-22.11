import React from 'react';
import {Card, Button, CardHeader, CardFooter, CardBody, CardText} from 'reactstrap';

export default function Comments(props) {
    return (
        <div>
            <h1 className="my-4">Comments Page <small>Secondary Text</small></h1>

            {props.comments.map((comment, idx) =>
                <Card className="mb-4" key={idx}>
                    <CardHeader className="text-muted">{comment.name}</CardHeader>
                    <CardBody>
                        <CardText>{comment.body}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted">{comment.email}</CardFooter>
                </Card>
            )}

            <Button onClick={props.onLoadMore} size="sm" block color="secondary"
                    disabled={props.loading}>More...</Button>{' '}
        </div>
    )
}
