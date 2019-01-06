
import './Footer.scss';
// import jpg from './1.jpg';

import React from 'react';
import PropTypes from 'prop-types';
// import Container from 'components/Container';

//stateless
export default function Footer(props) {  
        return (
            <div className="Footer">
                <p>© Geek Univercity React-22.11 Lobanov Arthur </p>                
            </div>
        )    
}

Footer.defaultProps = {};
Footer.propTypes = {};
