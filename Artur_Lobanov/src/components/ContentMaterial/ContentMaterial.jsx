import './ContentMaterial.css';

import React, { Component } from 'react';
import ContainerMaterial from 'components/ContainerMaterial';
import CardMaterial from 'components/CardMaterial';
import CaruselBootstrap from 'components/CaruselBootstrap';

export default class ContentMaterial extends Component {
    static defaultProps = {}

    render() {

        return (
            <div className="ContentMaterial">
                <ContainerMaterial>
                    <CaruselBootstrap />
                </ContainerMaterial>

                <ContainerMaterial>
                    <CardMaterial></CardMaterial>
                    <CardMaterial></CardMaterial>
                    <CardMaterial></CardMaterial>
                </ContainerMaterial>
                <ContainerMaterial>
                    <CardMaterial></CardMaterial>
                    <CardMaterial></CardMaterial>
                    <CardMaterial></CardMaterial>
                </ContainerMaterial>
            </div>
        )
    }
}
