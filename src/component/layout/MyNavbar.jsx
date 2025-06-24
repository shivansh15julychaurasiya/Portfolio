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
import { FiHome, FiInfo, FiUsers, FiMail, FiLogIn, FiChevronDown } from 'react-icons/fi';
import { RiComputerLine, RiSmartphoneLine, RiBriefcaseLine } from 'react-icons/ri';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="navbar-glass py-2 px-3 px-lg-4"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <NavbarBrand
        tag={Link}
        to="/"
        className="d-flex align-items-center gap-2 text-decoration-none"
      >
        <img 
          src="/images/vijaylogo.png" 
          alt="VijaySoftware Logo" 
          className="rounded-circle shadow-sm" 
          width="42" 
          style={{ border: '2px solid #fff' }}
        />
        {/* <span className="brand-text fs-5 fw-bold text-primary">VijaySoftware</span> */}
      </NavbarBrand>

      <NavbarToggler onClick={toggleNavbar} className="border-0 p-1">
        <div className={`navbar-toggler-animation ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar className="justify-content-end">
        <Nav className="align-items-lg-center gap-lg-3">
          <NavItem>
            <Link to="/" className="nav-link d-flex align-items-center gap-1">
              <FiHome className="d-lg-none" />
              <span>Home</span>
            </Link>
          </NavItem>
          
          <NavItem>
            <Link to="/about" className="nav-link d-flex align-items-center gap-1">
              <FiInfo className="d-lg-none" />
              <span>About</span>
            </Link>
          </NavItem>

          <Dropdown 
            nav 
            isOpen={dropdownOpen} 
            toggle={toggleDropdown}
            className="dropdown-hover" // Added for hover effect
          >
            <DropdownToggle 
              nav 
              className="nav-link d-flex align-items-center gap-1"
            >
              <span>Services</span>
              <FiChevronDown size={16} className="ms-1" />
            </DropdownToggle>
            <DropdownMenu 
              className="mt-2 border-0 shadow-lg rounded-lg overflow-hidden"
              style={{
                minWidth: '220px',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              <DropdownItem 
                tag={Link} 
                to="/services/web" 
                className="d-flex align-items-center gap-2 py-2 px-3"
              >
                <RiComputerLine className="text-primary" />
                Web Development
              </DropdownItem>
              <DropdownItem 
                tag={Link} 
                to="/services/mobile" 
                className="d-flex align-items-center gap-2 py-2 px-3"
              >
                <RiSmartphoneLine className="text-primary" />
                Mobile Apps
              </DropdownItem>
              <DropdownItem divider className="my-1" />
              <DropdownItem 
                tag={Link} 
                to="/services/consulting" 
                className="d-flex align-items-center gap-2 py-2 px-3"
              >
                <RiBriefcaseLine className="text-primary" />
                Consulting
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <NavItem>
            <Link to="/team" className="nav-link d-flex align-items-center gap-1">
              <FiUsers className="d-lg-none" />
              <span>Our Team</span>
            </Link>
          </NavItem>
          
          <NavItem>
            <Link to="/contact" className="nav-link d-flex align-items-center gap-1">
              <FiMail className="d-lg-none" />
              <span>Contact</span>
            </Link>
          </NavItem>
          
          <NavItem className="mt-2 mt-lg-0">
            <Link 
              to="/login" 
              className="btn btn-primary fw-semibold px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <FiLogIn />
              <span>Sign In</span>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>

      {/* Custom CSS for animations */}
      <style>
        {`
          .navbar-glass {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .navbar-toggler-animation {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 21px;
            width: 26px;
            cursor: pointer;
          }
          
          .navbar-toggler-animation span {
            display: block;
            height: 3px;
            width: 100%;
            background: #3a7bd5;
            border-radius: 3px;
            transition: all 0.3s ease;
          }
          
          .navbar-toggler-animation.open span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
          }
          
          .navbar-toggler-animation.open span:nth-child(2) {
            opacity: 0;
          }
          
          .navbar-toggler-animation.open span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
          }
          
          .nav-link {
            color: #2d3748 !important;
            font-weight: 500;
            padding: 0.5rem 1rem !important;
            border-radius: 8px;
            transition: all 0.2s ease;
          }
          
          .nav-link:hover {
            color: #3a7bd5 !important;
            background: rgba(58, 123, 213, 0.1);
          }
          
          .dropdown-hover:hover .dropdown-menu {
            display: block;
          }
          
          .dropdown-item {
            transition: all 0.2s ease;
          }
          
          .dropdown-item:hover {
            background: rgba(58, 123, 213, 0.1) !important;
            color: #3a7bd5 !important;
          }
          
          .brand-text {
            background: linear-gradient(135deg, #3a7bd5, #00d2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </Navbar>
  );
}

export default MyNavbar;