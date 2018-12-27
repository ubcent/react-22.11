import React from 'react';
import { 
    Card, 
    CardHeader,  
    CardBody, 
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function Widget(props) {
    return (
        <Card className="my-4">
            <CardHeader tag="h5">{props.head}</CardHeader>
            <CardBody>{props.children}</CardBody>
        </Card>
    )
}
Widget.defaultProps = {};
Widget.propTypes = {
    head: PropTypes.string.isRequired,
};