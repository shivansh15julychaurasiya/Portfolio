// Sidebar.js
import React from "react";
import styled from "styled-components";
import {
  FiUser,
  FiLogOut,
  FiSettings,
  FiBriefcase,
  FiHome,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, toggleSidebar }) => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ Logout handler
  const logoutHandle = () => {
    // if (window.confirm("Are you sure you want to logout?")) {
      logout(); // clear token, role, etc.
      navigate("/");
    // }
  };

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, tab: "dashboard" },
    { name: "Users", icon: <FiUser />, tab: "users" },
    { name: "Projects", icon: <FiBriefcase />, tab: "projects" },
    { name: "Settings", icon: <FiSettings />, tab: "settings" },
  ];

  return (
    <SidebarContainer collapsed={isCollapsed}>
      <ToggleButton onClick={toggleSidebar}>
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </ToggleButton>

      {!isCollapsed && <Brand></Brand>}

      <Nav>
        {menuItems.map((item) => (
          <NavItem
            key={item.tab}
            active={activeTab === item.tab}
            onClick={() => setActiveTab(item.tab)}
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </NavItem>
        ))}
      </Nav>

      {token && (
        <Logout onClick={logoutHandle}>
          <FiLogOut />
          {!isCollapsed && <span>Logout</span>}
        </Logout>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

// Styled Components (unchanged)
const SidebarContainer = styled.div`
  width: ${(props) => (props.collapsed ? "70px" : "250px")};
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  height: 100vh;
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  position: relative;
`;

const Brand = styled.h2``;

const Nav = styled.div`
  flex: 1;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;
  margin-bottom: 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ active }) => (active ? "rgba(255,255,255,0.1)" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    margin-right: ${({ collapsed }) => (collapsed ? "0" : "0.8rem")};
    font-size: 1.1rem;
  }

  span {
    font-size: 1rem;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-top: 1px solid rgba(255,255,255,0.2);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    margin-right: 0.5rem;
  }

  span {
    font-weight: 500;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
  align-self: flex-end;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
