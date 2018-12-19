import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './Media.css';

export default class MediaObj extends Component {
    render() {
        return (
            <Media className="mediaObj">
                <Media left href="#" className="media_left">
                    <Media object src="http://placehold.it/64x64/" alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        Media heading
        </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
            </Media>
        );
    }
};