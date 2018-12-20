import React, {Component} from 'react';
import {Card, Button, CardHeader, CardBody, Input, InputGroup, InputGroupAddon,} from 'reactstrap';

export default class Search extends Component {
    render() {
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
}
