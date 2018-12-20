import React, { Component } from 'react';
import { 
    Card, 
    CardHeader,  
    CardBody, 
} from 'reactstrap';

export default class Widget extends Component {
    render() {
        const { head, children } = this.props;
        return (
            <Card className="my-4">
                <CardHeader tag="h5">{head}</CardHeader>
                <CardBody>{children}</CardBody>
            </Card>
        )
    }
}
