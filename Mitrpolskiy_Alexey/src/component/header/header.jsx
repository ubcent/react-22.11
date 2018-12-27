import React, { Component } from 'react';

import LoginModal from '../loginModal';
import Menu from '../menu';

import './header.css';

const items = [
	{ key: 'home', title: 'Home', href:'/' },
	{ key: 'news', title: 'News', href:'/' },
	{ key: 'blog', title: 'Blog', href:'/' }
];

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

export default class Header extends Component {
	static defaultProps = {
		size: 'big'
	};

	render() {

		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Micro Blog</NavbarBrand>
					<Menu items={items}/>
					<div className="loginButton">
						<LoginModal buttonLabel="Login"/>
					</div>
				</Navbar>
			</div>
		);
	}
}