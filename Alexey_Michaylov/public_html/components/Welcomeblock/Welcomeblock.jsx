import './Welcomeblock.css';
import React, { Component } from 'react';
import { Jumbotron, Button, } from 'reactstrap';

export default class Welcomeblock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true,
        };
    }
    
    handleToggleClick = () => {
        this.setState((prevstate) => ({
            isShown: !prevstate.isShown
        }));
    }
    
    render() {
        const { isShown } = this.state;
        
        return (
            <div className="welcome-block">
                {isShown && 
                    <Jumbotron className="shadow-lg bg-warning">
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <div className="text-center">
                            <Button color="dark" size="lg" onClick={this.handleToggleClick}>Ok!</Button>
                        </div>
                    </Jumbotron>
                }
            </div>
        )
    }
}
