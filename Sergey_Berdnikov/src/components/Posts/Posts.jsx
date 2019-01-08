import './Posts.css';

//React импортируем в каждом файле
import React from 'react';

import { Button, Card, CardBody, CardFooter, CardLink, CardText, CardTitle } from 'reactstrap';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';

function Blog(props) {
    const { blogs, loading, onLoadMore, match } = props;

    return (
        <div className="Blog">
            {blogs.map((elem) => {
                return <Card key={elem.id}>
                    <CardBody>
                        <CardTitle>{elem.title}</CardTitle>
                        <CardText>{elem.body.substr(0, 90)}...</CardText>
                        <Button tag={RRNavLink} to={`/posts/${elem.id}`} color="primary">
                            Read
                        </Button>
                    </CardBody>
                    <CardFooter>
                        by
                        <CardLink tag={RRNavLink} to={`/users/${elem.userId}`}> Author id {elem.userId}</CardLink>
                    </CardFooter>
                </Card>
            })}
            {match.path === '/'
                ? ''
                : <Button color="primary" onClick={onLoadMore} disabled={loading}>Load more</Button>}
        </div>
    );
}

export default withRouter(Blog);
