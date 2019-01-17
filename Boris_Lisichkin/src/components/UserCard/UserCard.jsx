import React, { PureComponent } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardFooter, Button } from "reactstrap";
import { Link } from 'react-router-dom';

export default class UserCard extends PureComponent {
    render() {
        const { users, loading, onLoadMore } = this.props;

        return (
            < div className="UserCard">
                <h1 className="my-4">Users</h1>

                {users.map((user) =>
                    <Card className="mb-4" key={user.id}>
                        <CardHeader><Link to={`/user/${user.id}`}><h4>{user.name}</h4></Link></CardHeader>
                        <CardBody>
                            <CardTitle>Phone: <small>{user.phone}</small></CardTitle>
                            <CardTitle>Company: <small>{user.company.name}</small></CardTitle>
                        </CardBody>
                        <CardFooter>{user.website}</CardFooter>
                    </Card>
                )}

                <Button onClick={onLoadMore} size="sm" block color="danger" disabled={loading}>LoadMore</Button>
            </div>
        )
    }
}
