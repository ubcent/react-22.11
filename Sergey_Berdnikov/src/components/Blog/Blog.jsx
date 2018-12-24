import './Blog.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

import { Button, Card, CardBody, CardFooter, CardLink, CardText, CardTitle } from "reactstrap";

export default class Blog extends PureComponent
{

    render() {
        const { blogs, loading, onLoadMore } = this.props;

        return (
            <div className="Blog">
                {blogs.map((elem, idx) => {
                    return <Card key={idx}>
                        <CardBody>
                            <CardTitle>{elem.title}</CardTitle>
                            <CardText>{elem.body}</CardText>
                            <Button color="primary">Read</Button>
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
    
