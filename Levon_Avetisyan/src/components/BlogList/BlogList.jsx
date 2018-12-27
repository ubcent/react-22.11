import './BlogList.css'
import React, {PureComponent} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    NavLink
} from 'reactstrap';

import UserSideContainer from 'containers/UserSideContainer';

export default class BlogList extends PureComponent {

    render() {
        const {posts, loading, onShowMore} = this.props;
        return (
            <div className="BlogList">
                {posts.map((post, idx) =>
                    <Card key={idx}>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                            <UserSideContainer user={post.userId}/>
                            <CardText>{post.body}</CardText>
                            <Button>Read</Button>
                        </CardBody>
                    </Card>)}
                <Button onClick={onShowMore} disabled={loading} color="primary">Show more</Button>
            </div>
        )
    }
}