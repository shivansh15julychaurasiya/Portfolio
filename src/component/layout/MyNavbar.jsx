import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar expand="md" fixed="top" className="bg-light shadow py-3 px-4">
      <NavbarBrand
        tag={Link}
        to="/"
        className="d-flex align-items-center gap-2 text-dark text-decoration-none"
      >
        <img src="/images/vijaylogo.png" alt="Logo" className="rounded-circle" width="40" />
      </NavbarBrand>

      <NavbarToggler onClick={toggleNavbar} className="bg-light" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto d-flex gap-4 align-items-center">
          <NavItem>
            <Link to="/" className="nav-link text-dark">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link text-dark">About</Link>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle nav caret className="nav-link text-dark">
              Services
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag={Link} to="/services/web">🌐 Web Development</DropdownItem>
              <DropdownItem tag={Link} to="/services/mobile">📱 Mobile Apps</DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/services/consulting">💼 Consulting</DropdownItem>
            </DropdownMenu>
          </Dropdown>
           <NavItem>
            <Link to="/team" className="nav-link text-dark">Our Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="nav-link text-dark">Contact</Link>
          </NavItem>
          <NavItem>
            <Link to="/login" className="btn btn-primary fw-bold px-4 rounded-pill shadow-sm">Sign In</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MyNavbar;
