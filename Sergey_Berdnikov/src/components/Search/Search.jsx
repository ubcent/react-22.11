import './Search.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default class Search extends PureComponent
{
    static defaultProps = {};

    render() {
        return (
            <div className="Search">
                <Card>
                    <CardHeader tag="h5">Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input placeholder="Search for..."/>
                            <InputGroupAddon addonType="append"><Button>Go!</Button></InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
};
    
