import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Blog(props) {
    return (
        <div>
            <h1 className="my-4">Blog Page <small>Secondary Text</small></h1>
            {props.posts.map((post) =>
                <Card className="mb-4" key={post.id}>
                    <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
                    <CardBody>
                        <CardTitle tag="h2">{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
                        <Button tag={Link} to={`/blog/${post.id}`} color="primary">Read More →</Button>
                    </CardBody>
                    <CardFooter className="text-muted">Posted on January 1, 2017 by <a href="#">Start
                        Bootstrap</a></CardFooter>
                </Card>
            )}
            <Pagination listClassName="justify-content-center mb-4">
                <PaginationItem disabled>
                    <PaginationLink previous href="#">
                        ← Older
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={props.loading}>
                    <PaginationLink next onClick={props.onLoadMore}>
                        Newer →
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>
    )
}
