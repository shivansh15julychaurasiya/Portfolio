import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Table,
  Badge,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaProjectDiagram, FaDownload } from "react-icons/fa";

// CSV Export Utility
const downloadCSV = (projects) => {
  const csvRows = [
    ["ID", "Title", "Client", "Status", "Start Date"],
    ...projects.map((p) => [
      p.id,
      p.title,
      p.client,
      p.status,
      p.startDate,
    ]),
  ];

  const csvContent = csvRows.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "projects.csv";
  a.click();
};

const ProjectList = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      client: "Vijay Enterprises",
      status: "Completed",
      startDate: "2024-12-10",
    },
    {
      id: 2,
      title: "Mobile App - CRM",
      client: "ABC Corp",
      status: "In Progress",
      startDate: "2025-02-01",
    },
    {
      id: 3,
      title: "Interior Design Estimator",
      client: "Sharma Interiors",
      status: "Pending",
      startDate: "2025-06-15",
    },
    {
      id: 4,
      title: "Portfolio Website",
      client: "Vikram",
      status: "Completed",
      startDate: "2025-03-10",
    },
    {
      id: 5,
      title: "Event Booking Platform",
      client: "EventZone",
      status: "In Progress",
      startDate: "2025-04-01",
    },
    {
      id: 6,
      title: "Hospital Management System",
      client: "MedPlus",
      status: "Pending",
      startDate: "2025-05-15",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "warning";
      case "Pending":
        return "danger";
      default:
        return "secondary";
    }
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "prev") return Math.max(prev - 1, 1);
      if (direction === "next") return Math.min(prev + 1, totalPages);
      return prev;
    });
  };

  const getClientAvatar = (client) =>
    client
      .split(" ")
      .map((c) => c[0])
      .join("")
      .toUpperCase();

  return (
    <Container className="mfy-5"  data-aos="fade-up">
      <Card
        className="shadow rounded-4 border-0"
        style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardBody>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <h3 className="fw-bold text-primary">
                <FaProjectDiagram className="me-2" />
                Project Management
              </h3>
            </Col>
            <Col md={4}>
              <Input
                placeholder="Search by title/client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={2} className="text-end">
              <Button
                color="primary"
                onClick={() => downloadCSV(filteredProjects)}
              >
                <FaDownload className="me-1" />
                Export CSV
              </Button>
            </Col>
          </Row>

          <div className="table-responsive">
            <Table bordered hover className="text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Project Title</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProjects.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-muted py-3">
                      No matching projects found.
                    </td>
                  </tr>
                ) : (
                  paginatedProjects.map((project, index) => (
                    <tr key={project.id}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td className="fw-semibold">{project.title}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <div
                            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                            style={{
                              width: "35px",
                              height: "35px",
                              fontSize: "14px",
                              fontWeight: "bold",
                            }}
                          >
                            {getClientAvatar(project.client)}
                          </div>
                          <span>{project.client}</span>
                        </div>
                      </td>
                      <td>
                        <Badge color={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </td>
                      <td>{project.startDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              Showing {paginatedProjects.length} of {filteredProjects.length}{" "}
              projects
            </div>
            <div>
              <Button
                size="sm"
                color="secondary"
                onClick={() => changePage("prev")}
                disabled={currentPage === 1}
              >
                Previous
              </Button>{" "}
              <Button
                size="sm"
                color="secondary"
                onClick={() => changePage("next")}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProjectList;
