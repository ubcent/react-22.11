import './ContainerMaterial.css';

import React, { Component } from 'react';

export default class ContainerMaterial extends Component {
    static defaultProps = {}
    

    render(){
        const { children } = this.props;    
        return (
            <div className="ContainerMaterial">{children}</div>
        )
    }
}
