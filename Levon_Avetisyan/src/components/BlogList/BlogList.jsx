import './BlogList.css'
import React, {PureComponent} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

export default class BlogList extends PureComponent {

    render() {
        const { posts, loading } = this.props;
        console.log(posts);
        return (
            <div className="BlogList">
                {posts.map((post, idx) =>
                    <Card key={idx}>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                            <CardText>{post.body}</CardText>
                            <Button>Read</Button>
                        </CardBody>
                    </Card>)}
            </div>
        )
    }
}