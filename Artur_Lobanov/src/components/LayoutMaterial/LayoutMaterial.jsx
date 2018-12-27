import './LayoutMaterial.css';

import React, { Component } from 'react';

import HeaderMaterial from 'components/HeaderMaterial';
import ContentMaterial from 'components/ContentMaterial';

export default class LayoutMaterial extends Component {
    static defaultProps = {

    }

    render(){
        
        return (
            <div className="LayoutMaterial">
                <HeaderMaterial />
                <ContentMaterial />
            </div>
        )
    }
}
