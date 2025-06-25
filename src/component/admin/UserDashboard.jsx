// Enhanced UserDashboard with Dark Mode Toggle and Notification Dropdown
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { FiUser, FiSettings, FiLogOut, FiBriefcase, FiBarChart2, FiBell, FiMoon, FiSun } from 'react-icons/fi';

const lightTheme = {
  background: '#f5f7fa',
  text: '#2d3748',
  card: 'white',
  sidebar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
};

const darkTheme = {
  background: '#1a202c',
  text: '#edf2f7',
  card: '#2d3748',
  sidebar: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
};

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState('light');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = {
        name: 'Vijay Sharma',
        email: 'vijay@vijaysoftwaresolution.com',
        joinDate: 'January 15, 2023',
        projects: 8,
        tasksCompleted: 42,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      };
      setUser(userData);
      setNotifications([
        { id: 1, message: 'New project assigned', time: '2 hours ago', read: false },
        { id: 2, message: 'System update available', time: '1 day ago', read: true },
        { id: 3, message: 'Your report is ready', time: '3 days ago', read: true },
      ]);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  if (!user) return <Loading>Loading dashboard...</Loading>;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DashboardContainer>
        <Sidebar>
          <UserProfile>
            <Avatar src={user.avatar} alt={user.name} />
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserProfile>
          <NavMenu>
            <NavItem active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
              <FiBarChart2 /> Overview
            </NavItem>
            <NavItem active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
              <FiBriefcase /> My Projects
            </NavItem>
            <NavItem active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
              <FiUser /> Profile
            </NavItem>
            <NavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
              <FiSettings /> Settings
            </NavItem>
          </NavMenu>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut /> Logout
          </LogoutButton>
        </Sidebar>

        <MainContent>
          <Header>
            <PageTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</PageTitle>
            <Actions>
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeToggle>
              <NotificationBell onClick={() => setShowDropdown(!showDropdown)}>
                <FiBell />
                {notifications.filter(n => !n.read).length > 0 && (
                  <NotificationBadge>{notifications.filter(n => !n.read).length}</NotificationBadge>
                )}
                {showDropdown && (
                  <Dropdown>
                    {notifications.map(note => (
                      <DropdownItem key={note.id}>{note.message}</DropdownItem>
                    ))}
                  </Dropdown>
                )}
              </NotificationBell>
            </Actions>
          </Header>

          {/* Placeholder content */}
          <div style={{ color: theme === 'light' ? '#2d3748' : '#edf2f7' }}>
            This is your {activeTab} page.
          </div>
        </MainContent>
      </DashboardContainer>
    </ThemeProvider>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const Sidebar = styled.div`
  width: 280px;
  background: ${({ theme }) => theme.sidebar};
  color: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const UserProfile = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  margin: 0.5rem 0;
  font-weight: 600;
`;

const UserEmail = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const NavMenu = styled.nav`
  flex: 1;
  margin: 2rem 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? 'rgba(255,255,255,0.1)' : 'transparent')};
  &:hover {
    background: rgba(255,255,255,0.1);
  }
  svg { margin-right: 0.8rem; }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  svg { margin-right: 0.5rem; }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

const NotificationBell = styled.div`
  position: relative;
  padding: 0.5rem;
  cursor: pointer;
  color: #4a5568;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #f56565;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #4a5568;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  width: 220px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const DropdownItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.9rem;
  &:last-child { border-bottom: none; }
  &:hover { background: #f7fafc; }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #4a5568;
`;

export default UserDashboard;
