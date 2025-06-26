import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../layout/Sidebar";
import UserList from "./UserList";
import ProjectList from "./AdminProjets";
import Settings from "./Setting"; // Make sure this component exists
import {
  FaUsers,
  FaProjectDiagram,
  FaRupeeSign,
  FaUserTie,
} from "react-icons/fa";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Row, Col, Card, CardBody, Button } from "reactstrap";

ChartJS.register(LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);


  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  const summaryCards = [
    {
      title: "Users",
      value: "120",
      icon: <FaUsers size={30} />,
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      btnText: "View Users",
      tab: "users",
    },
    {
      title: "Projects",
      value: "18",
      icon: <FaProjectDiagram size={30} />,
      bg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      btnText: "View Projects",
      tab: "projects",
    },
    {
      title: "Revenue",
      value: "₹1.2L",
      icon: <FaRupeeSign size={30} />,
      bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Active Clients",
      value: "34",
      icon: <FaUserTie size={30} />,
      bg: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
    },
  ];

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 30, 45, 60, 80, 100],
        borderColor: "#4bc0c0",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [12, 6, 4],
        backgroundColor: ["#36a2eb", "#ffce56", "#ff6384"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Wrapper style={{ marginTop: "100px" }}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      <Main collapsed={isSidebarCollapsed}>
        {activeTab === "dashboard" && (
          <>
            <h2 className="fw-bold mb-4">📊 Admin Dashboard</h2>

            <Row className="mb-4">
              {summaryCards.map((card, index) => (
                <Col md={6} lg={3} key={index} className="mb-3">
                  <Card
                    className="text-white shadow border-0"
                    style={{ background: card.bg }}
                  >
                    <CardBody
                      className="d-flex flex-column align-items-center justify-content-between text-center"
                      style={{ height: "200px" }}
                    >
                      <div>
                        <div className="mb-2">{card.icon}</div>
                        <h5 className="fw-bold">{card.title}</h5>
                        <h2 className="fw-bold">{card.value}</h2>
                      </div>
                      {card.tab && (
                        <Button
                          size="sm"
                          color="light"
                          onClick={() => setActiveTab(card.tab)}
                        >
                          {card.btnText}
                        </Button>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row>
              <Col md={8}>
                <Card className="shadow-sm">
                  <CardBody>
                    <h5>User Growth</h5>
                    <Line data={lineChartData} />
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm">
                  <CardBody>
                    <h5>Project Status</h5>
                    <Doughnut data={doughnutChartData} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </>
        )}

        {activeTab === "users" && <UserList />}
        {activeTab === "projects" && <ProjectList />}
        {activeTab === "settings" && <Settings />}
      </Main>
    </Wrapper>
  );
};

export default AdminDashboard;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  padding: 2rem;
  background: #f5f7fa;
  transition: margin-left 0.3s ease;
`;
