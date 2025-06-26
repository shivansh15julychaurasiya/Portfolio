import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Table,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserFriends } from "react-icons/fa";
import { fetchAllUsers, deleteUserById } from "../../services/AuthSerive";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  // Modal state for viewing full message
  const [modal, setModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  const loadUsers = async (page) => {
    const result = await fetchAllUsers(page, pageSize);
    if (result.success) {
      setUsers(result.data.content);
      console.log(result.data.content)
      setPageInfo({
        page: result.data.pageNumber,
        totalPages: result.data.totalPages,
        totalElements: result.data.totalElements,
      });
    } else {
      console.error(result.message);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < pageInfo.totalPages) {
      setCurrentPage(newPage);
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteUserById(id);
        if (res.success) {
          Swal.fire("Deleted!", "User has been deleted.", "success");
          loadUsers(currentPage);
        } else {
          Swal.fire("Error!", res.message, "error");
        }
      }
    });
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const toggleModal = () => setModal(!modal);

  const viewMessage = (msg) => {
    setSelectedMessage(msg);
    toggleModal();
  };

  return (
    <Container data-aos="fade-up">
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
              Total: {pageInfo.totalElements || 0}
            </Badge>
          </div>

          <div className="table-responsive">
            <Table className="align-middle text-center table-hover" bordered responsive>
              <thead className="table-light text-dark">
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Email</th>
                  <th className="d-none d-md-table-cell">Phone</th>
                  <th className="d-none d-md-table-cell">Service</th>
                  <th className="d-none d-md-table-cell">Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <React.Fragment key={user.id}>
                    {/* Desktop View */}
                    <tr className="d-none d-md-table-row">
                      <td>{index + 1 + currentPage * pageSize}</td>
                      <td>
                        <div
                          className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                          style={{ width: "40px", height: "40px", fontWeight: "bold" }}
                        >
                          {getInitials(user.name)}
                        </div>
                      </td>
                      <td>{user.name}</td>
                      <td className="d-none d-md-table-cell">{user.email}</td>
                      <td className="d-none d-md-table-cell">{user.phone}</td>
                      <td className="d-none d-md-table-cell">{user.service}</td>
                      <td
                        className="d-none d-md-table-cell text-wrap text-truncate"
                        style={{ maxWidth: "150px" }}
                        title={user.message}
                      >
                        {user.message}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => confirmDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    {/* Mobile View */}
                    <tr className="d-table-row d-md-none bg-light">
                      <td colSpan="8" className="text-start">
                        <strong>{user.name}</strong> <br />
                        📧 {user.email} <br />
                        📱 {user.phone} <br />
                        🛠 {user.service} <br />
                        📝 <Button size="sm" color="info" onClick={() => viewMessage(user.message)}>
                          View Message
                        </Button>{" "}
                        <Button size="sm" color="danger" onClick={() => confirmDelete(user.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between mt-3">
            <Button
              color="secondary"
              disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <span className="fw-semibold">
              Page {pageInfo.page + 1} of {pageInfo.totalPages}
            </span>
            <Button
              color="secondary"
              disabled={currentPage === pageInfo.totalPages - 1}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Modal for Full Message */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>User Message</ModalHeader>
        <ModalBody>
          <p>{selectedMessage}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default UserList;
