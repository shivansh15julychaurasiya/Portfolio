import React, { useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  Table,
  Badge,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserFriends } from "react-icons/fa";

const UserList = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const users = [
    {
      id: 1,
      name: "Vijay",
      email: "vijay@example.com",
      joined: "2025-01-02",
    },
    {
      id: 2,
      name: "Ravi Sharma",
      email: "ravi@example.com",
      joined: "2025-02-10",
    },
    {
      id: 3,
      name: "Neha Singh",
      email: "neha@example.com",
      joined: "2025-03-15",
    },
  ];

  // For avatar initials
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <Container  data-aos="fade-up" style={{ marginTop: "7rem" }}>
      <Card
        className="shadow rounded-4 border-0"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-primary m-0">
              <FaUserFriends className="me-2" />
              User Management
            </h3>
            <Badge color="primary" pill className="fs-6 px-3 py-2">
              Total: {users.length}
            </Badge>
          </div>

          <div className="table-responsive">
            <Table
              className="align-middle text-center table-hover"
              style={{ borderRadius: "10px", overflow: "hidden" }}
              bordered
              responsive
            >
              <thead className="table-light text-dark">
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined On</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="fw-bold">{index + 1}</td>
                    <td>
                      <div
                        className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        {getInitials(user.name)}
                      </div>
                    </td>
                    <td className="fw-semibold">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Badge color="light" className="text-dark">
                        {user.joined}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UserList;
