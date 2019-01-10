
import './Container.scss';

import React, { Component } from 'react';

export default class Container extends Component {

    static defaultProps = {}

    render() {

        const { children } = this.props;
              
        return (
            <div className="Container">
            { children }
            </div>
        )
    }
}

