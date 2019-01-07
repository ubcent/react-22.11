import './Posts.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

import { Button, Card, CardBody, CardFooter, CardLink, CardText, CardTitle } from "reactstrap";
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Blog extends PureComponent
{

    render() {
        const { blogs, loading, onLoadMore } = this.props;

        return (
            <div className="Blog">
                {blogs.map((elem) => {
                    return <Card key={elem.id}>
                        <CardBody>
                            <CardTitle>{elem.title}</CardTitle>
                            <CardText>{elem.body}</CardText>
                            <Button tag={RRNavLink} to={`/posts/${elem.id}`} color="primary">
                                Read
                            </Button>
                        </CardBody>
                        <CardFooter>
                            by
                            <CardLink> UserId = {elem.userId}</CardLink>
                        </CardFooter>
                    </Card>
                })}
                <Button color="primary" onClick={onLoadMore} disabled={loading}>Load more</Button>
            </div>
        );
    }
};
    
