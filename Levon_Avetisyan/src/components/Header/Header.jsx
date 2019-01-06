import './Header.css'
import React, {PureComponent} from 'react';

import Menu from 'components/Menu';

export default class Header extends PureComponent {
    static defaultProps = {}
    
    render() {
        return (
            <div className="Header">
                <Menu />
            </div>
        )
    }
}