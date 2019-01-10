import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends PureComponent {
    getActive = (href) => {
        const { location } = this.props;
        const substr = location.pathname.substr(0, href.length);
        if(href.length === 1 && location.pathname.length !== 1) {return '';}
        return substr === href ? 'active' : '';
    }

    render() {
        const { items } = this.props;
        return(
            <Nav className="mr-auto" navbar>
                {items.map((item, idx) => <NavItem key={idx}><NavLink tag={Link} to={item.href} className={this.getActive(item.href)}>{item.title}</NavLink></NavItem>)}
            </Nav> 
        );
    }
};

export default withRouter(Menu);
