import React, {Component} from 'react';
import {Container,} from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="py-5 bg-dark">
                <Container>
                    <p className="m-0 text-center text-white">Copyright © Your Website 2018</p>
                </Container>
            </div>
        )
    }
}
