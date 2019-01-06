import './Layout.css'
import React, {PureComponent} from 'react';

import Header from 'components/Header';

export default class Layout extends PureComponent {
    static defaultProps = {}
    
    render() {
        return (
            <div className="Layout">
                <Header/>
            </div>
        )
    }
}