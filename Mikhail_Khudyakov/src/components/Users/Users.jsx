import React from 'react';
import {Button, Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

export default function Users(props) {
    return (
        <div>
            <h1 className="my-4">Users Page <small>Secondary Text</small></h1>

            {props.users.map((user, idx) =>
                <Card className="mb-4" key={idx}>
                    <CardHeader>{user.name}
                        <small>{user.email}</small>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>Address</CardTitle>
                        <CardText>
                            <ul>
                                <li>Street: {user.address.street}</li>
                                <li>Suite: {user.address.suite}</li>
                                <li>City: {user.address.city}</li>
                            </ul>
                        </CardText>
                        <Button disabled>More</Button>
                    </CardBody>
                </Card>
            )}
            <Button onClick={props.onLoadMore} size="sm" block color="secondary"
                    disabled={props.loading}>More...</Button>{' '}
        </div>
    )
}
