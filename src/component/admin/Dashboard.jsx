import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button,
  Badge,
} from "reactstrap";
import {
  FaUsers,
  FaProjectDiagram,
  FaRupeeSign,
  FaUserTie,
  FaBell,
} from "react-icons/fa";
import { Line, Doughnut } from "react-chartjs-2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
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

ChartJS.register(LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { msg: "New lead submitted", time: "5 mins ago" },
    { msg: "New user registered", time: "10 mins ago" },
    { msg: "Payment received from client", time: "1 hour ago" },
  ]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const summaryCards = [
    {
      title: "Users",
      value: "120",
      icon: <FaUsers size={30} />,
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      btnText: "View Users",
      link: "/admin/users",
    },
    {
      title: "Projects",
      value: "18",
      icon: <FaProjectDiagram size={30} />,
      bg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      btnText: "View Projects",
      link: "/admin/projects",
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
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#4bc0c0",
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
    <Container fluid className="p-4" style={{ marginTop: "5rem" }}>
      <Row>
        <Col>
          <h2 className="fw-bold mb-4">📊 Admin Dashboard -</h2>
        </Col>
      </Row>

      {/* Summary Cards */}
      <Row className="mb-4">
        {summaryCards.map((card, index) => (
          <Col md={6} lg={3} key={index} className="mb-3" data-aos="zoom-in">
            <Card className="text-white shadow border-0" style={{ background: card.bg }}>
             <CardBody className="d-flex flex-column align-items-center justify-content-between text-center" style={{ height: "200px" }}>
  <div>
    <div className="mb-2">{card.icon}</div>
    <h5 className="fw-bold">{card.title}</h5>
    <h2 className="fw-bold">{card.value}</h2>
  </div>
  {card.link && (
    <Button
      size="sm"
      color="light"
      className="fw-bold"
      onClick={() => navigate(card.link)}
    >
      {card.btnText}
    </Button>
  )}
</CardBody>

            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts */}
      <Row className="mb-4">
        <Col md={8} data-aos="fade-up">
          <Card className="shadow-sm">
            <CardBody>
              <h5>User Growth</h5>
              <Line data={lineChartData} />
            </CardBody>
          </Card>
        </Col>
        <Col md={4} data-aos="fade-left">
          <Card className="shadow-sm">
            <CardBody>
              <h5>Project Status</h5>
              <Doughnut data={doughnutChartData} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Notifications + Latest Leads */}
      <Row>
        <Col md={6} data-aos="fade-up">
          <Card className="shadow-sm">
            <CardBody>
              <h5 className="mb-3"><FaBell className="me-2" />Recent Notifications</h5>
              {notifications.map((note, idx) => (
                <div key={idx} className="mb-2">
                  <Badge color="info" className="me-2">●</Badge>
                  {note.msg} <span className="text-muted">({note.time})</span>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={6} data-aos="fade-up">
          <Card className="shadow-sm">
            <CardBody>
              <h5 className="mb-3">📥 Latest Leads</h5>
              <Table size="sm" bordered responsive>
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ravi Sharma</td>
                    <td>ravi@example.com</td>
                    <td>Website</td>
                  </tr>
                  <tr>
                    <td>Neha Singh</td>
                    <td>neha@example.com</td>
                    <td>App Dev</td>
                  </tr>
                  <tr>
                    <td>Vikas Yadav</td>
                    <td>vikas@example.com</td>
                    <td>CRM</td>
                  </tr>
                </tbody>
              </Table>
              <Button size="sm" color="primary">View All</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
