import './Header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavMenu from 'components/NavMenu';
import Container from 'components/Container';

export default class Header extends Component {

    static defaultProps = {
        color: 'black',
    }

    static propTypes = {
        color: PropTypes.oneOf(['black', 'opacity']).isRequired,
    }

    render() {
        const { color } = this.props;

        const headerClasses = classNames({
            header: true,
            'header-black': color === 'black',
            'header-opacity': color === 'opacity',
        })
       
        return (
            <header className={headerClasses}>
                <Container>
                   <div className="header_content">
                        <div className="header_left"><h1>Logo</h1></div>
                        <div className="header-right"><NavMenu /></div>
                   </div>
                </Container>
            </header>
        )
    }
}