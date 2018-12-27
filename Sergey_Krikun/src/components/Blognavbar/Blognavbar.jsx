import './Blognavbar.css';

import React, { PureComponent } from 'react';
import NavMenu from 'components/NavMenu';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

export default class Blognavbar extends PureComponent {
  static propTypes = {
    logoString: PropTypes.string,
    logoHref: PropTypes.string,
  }

  constructor(props) {
    super(props);


    this.state = {
      isOpen: false,
      class: 'Blognavbar',
      prevPos: null,
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  scrollFunction = () => {
    const currentPos = window.pageYOffset;
    if (this.state.prevPos > currentPos) {
      this.setState({ class: 'Blognavbar show-nav' });
    } else {
      this.setState({ class: 'Blognavbar hide-nav' });
    };
    if (currentPos <= 1) {
      this.setState({ class: 'Blognavbar' });
    };
    this.state.prevPos = currentPos;
  }

  componentDidMount() {
    this.state.prevPos = window.pageYOffset;
    window.addEventListener('scroll', this.scrollFunction);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  };

  render() {
    const items = [
      {
        key: '1', title: 'HOME', href: '#',
      },
      {
        key: '2', title: 'List of Posts', href: '#',
      },
      {
        key: '3', title: 'One Atticle with comments', href: '#',
      },
      {
        key: '4', title: 'Author', href: '#',
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

