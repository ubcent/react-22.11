
import './Tesimonials.scss';
import client1 from './client1.jpg';
import client2 from './client2.jpg';
import client3 from './client3.jpg';

import React, { PureComponent } from 'react';
import Container from 'components/Container';

export default class Tesimonials extends PureComponent {

    static defaultProps = {}

    render() {
              
        return (
            <div className="Tesimonials">
                <Container>
                    <div className="testimonials_wrapper">
                        <div className="top">
                            <h2>TESTIMONIALS</h2>
                            <p>what clients are saying about us</p>
                        </div>
                        <div className="bottom">
                            <div className="testimonials_item"><p>Dolor sit amet consectetur isicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud laboris.</p><img src={client1} alt=""/><h4>John Doe</h4><h5>CEO</h5></div>
                            <div className="testimonials_item"><p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sunt in culpa officia deserunt mollit anim laborum sint occaecat.</p><img src={client2} alt=""/><h4>Alex Martin</h4><h5>UI Designer</h5></div>
                            <div className="testimonials_item"><p>Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse slum dolore eu fugiat nulla pariatursint occaecat.</p><img src={client3} alt=""/><h4>Linda Doe</h4><h5>Developer</h5></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
