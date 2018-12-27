import React from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';

export default function Widget() {
    return (
        <Card className="mt-4">
            <CardHeader tag="h5">Side Widget</CardHeader>
            <CardBody>
                You can put anything you want inside of these side widgets.
                They are easy to use, and feature the new Bootstrap 4 card containers!
            </CardBody>
        </Card>
    )
}
