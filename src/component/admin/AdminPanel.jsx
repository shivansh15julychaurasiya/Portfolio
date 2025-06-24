import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import ProjectList from "./ProjectList";
import SettingsPage from "./SettingsPage";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "dashboard";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, padding: "2rem", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "users" && <UserManagement />}
        {activeTab === "projects" && <ProjectList />}
        {activeTab === "settings" && <SettingsPage />}
      </div>
    </div>
  );
};

export default AdminPanel;
