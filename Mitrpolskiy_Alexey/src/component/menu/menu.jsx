import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';

import './menu.css'

export default class Menu extends Component {

	render() {
		const { items } = this.props;

		return (

			<Nav className="ml-auto" navbar>
				{items.map((item) =>
					<NavItem key={item.key}>
						<NavLink href={item.href}>{item.title}</NavLink>
					</NavItem>
				)}
			</Nav>
		);


	}
}