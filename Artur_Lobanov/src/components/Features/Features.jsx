
import './Features.scss';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

import React, { PureComponent } from 'react';
import Container from 'components/Container';

export default class Features extends PureComponent {

    static defaultProps = {}

    render() {
              
        return (
            <div className="Features">
               <Container>
                <div className="features_wrapper">
                <div className="featuresItem"><img src={icon1} alt=""/><h3>Officia Deserunt Mollit</h3><p>sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore et&nbsp;dolore magna aliqua voluptate velit esse cillum dolore.</p></div>
                <div className="featuresItem"><img src={icon2} alt=""/><h3>Culpa Killum Dolore</h3><p>aute irure dolor in&nbsp;reprehenderit in&nbsp;voluptate velit esse cillum dolore eu&nbsp;fugiat nulla pariatur.</p></div>
                <div className="featuresItem"><img src={icon3} alt=""/><h3>Elit Tempor Incididunt</h3><p>nostrud exercitation ullamco laboris nisi ut&nbsp;aliquip ex&nbsp;ea&nbsp;commodo consequat enim ad&nbsp;minim veniam.</p></div>
                </div>
               </Container>
            </div>
        )
    }
}
