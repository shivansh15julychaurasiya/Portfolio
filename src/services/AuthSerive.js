// src/services/authService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8081/auth"; // change if deployed

// Login API (for ADMIN only)
export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    // Save token in localStorage (or context)
    const token = response.data.data.token;
    localStorage.setItem("token", token);

    return {
      success: true,
      message: response.data.message,
      token: token,
    };
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Login failed. Please check your credentials.";

    return {
      success: false,
      message,
    };
  }
};
