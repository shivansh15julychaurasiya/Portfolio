import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar color="dark" dark expand="md" fixed="top" className="px-5 shadow">
      <NavbarBrand href="/" className="fw-bold fs-4">
        Portfolio
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="me-auto custom-nav">
          <NavItem className="custom-navitem">
            <NavLink href="/" className="custom-navlink px-5">
              Home
            </NavLink>
          </NavItem>
          <NavItem className="custom-navitem">
            <NavLink href="/about" className="custom-navlink px-3">
              About
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown} className="custom-navitem">
            <DropdownToggle nav caret className="custom-navlink px-5">
              Services
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/services/web">Web Development</DropdownItem>
              <DropdownItem href="/services/mobile">Mobile Apps</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/services/consulting">Consulting</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem className="custom-navitem">
            <NavLink href="/contact" className="custom-navlink px-4">
              Contact
            </NavLink>
          </NavItem>
        </Nav>

        <Nav className="ms-auto">
          <NavItem>
            <NavLink
              href="/signup"
              className="btn btn-primary text-white rounded-pill px-4"
              style={{ marginLeft: 'auto' }}
            >
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MyNavbar;
