
import './TopBilboard.scss';
// import jpg from './billboard.jpg';

import React, { PureComponent } from 'react';
import Header from 'components/Header';

export default class TopBilboard extends PureComponent {

    static defaultProps = {}

    render() {
              
        return (
            <div className="TopBilboard">
                <Header color="opacity"/>
                <div className="caption">
                    <h1>Sunt In Culpa Officia Deserunt</h1>
                    <p>dolore magna aliqua enim ad minim veniam occaecat</p>
                </div>
                <div className="shadow"></div>
            </div>
        )
    }
}
