import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://sharmainteriorbackend1-production.up.railway.app/api/admin/login",
        credentials
      );

      if (res.status === 200) {
        localStorage.setItem("role", "admin");
        navigate("/admin/leads");
      }
    } catch (err) {
      setError(err.response?.data || "Login failed!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url("/images/login.jpg")`, //  Make sure this image exists in /public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Card className="mt-5"
        data-aos="zoom-in"
        style={{
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          color: "#fff",
        }}
      >
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4 text-white">
             Login Here
          </CardTitle>

          {error && <Alert color="danger">{error}</Alert>}

          <Form onSubmit={handleLogin} data-aos="fade-up">
            <FormGroup>
              <Label for="username" className="text-white">
                Username
              </Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={credentials.username}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "none",
                  color: "#000",
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password" className="text-white">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "none",
                  color: "#000",
                }}
              />
            </FormGroup>

            <Button color="success" block type="submit" className="fw-bold mt-4">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
