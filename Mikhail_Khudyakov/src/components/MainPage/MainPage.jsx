import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import Carousel from 'components/MyCarousel';

export default function MainPage() {
    return (
        <div>
            <h1 className="my-4">Home Page <small>Secondary Text</small></h1>
            <Carousel/>
            <Jumbotron className="mt-4">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-2"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
