import React from 'react';
import {Card, Button, CardHeader, CardBody} from 'reactstrap';

export default function Search() {
    return (
        <Card className="mt-4">
            <CardHeader tag="h5">Search</CardHeader>
            <CardBody>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."></input>
                    <span><Button>Go!</Button></span>
                </div>
            </CardBody>
        </Card>
    )
}
