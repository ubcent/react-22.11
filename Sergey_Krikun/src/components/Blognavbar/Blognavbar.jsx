import './Blognavbar.css';

import React, { Component } from 'react';
import NavMenu from 'components/NavMenu';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

export default class Blognavbar extends Component {
  static propTypes = {
    logoString: PropTypes.string,
    logoHref: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      class: 'Blognavbar',
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    let prevPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset;
      if (prevPos > currentPos) {
        this.setState({ class: 'Blognavbar show-nav' });
      } else {
        this.setState({ class: 'Blognavbar hide-nav' });
      };
      if (currentPos <= 1) {
        this.setState({ class: 'Blognavbar' });
      };
      prevPos = currentPos;
    });
  };

  render() {
    const items = [
      {
        key: '1', title: 'HOME', href: '#',
      },
      {
        key: '2', title: 'ABOUT', href: '#',
      },
      {
        key: '3', title: 'SAMPLE POST', href: '#',
      },
      {
        key: '4', title: 'CONTACT', href: '#',
      },
    ];

    return (
      <div className="navbar-container">
        <Navbar className={this.state.class} dark expand="md">
          <NavbarBrand className="navbar_logo-text" href={this.props.logoHref}>
            {this.props.logoString}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavMenu items={items} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

