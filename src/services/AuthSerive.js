// src/services/authService.js

import axios from "axios";
const API_BASE_URL = "http://localhost:8081"; // change this if deployed

// Create a base axios instance with token interceptor
const API = axios.create({
  baseURL: API_BASE_URL, //  fixed
});

// Attach token automatically to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

// ------------------ AUTH SERVICES ------------------

// Admin login
export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password,
    });

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

// Submit quote
export const submitQuote = async (formData) => {
  console.log(formData)
  try {
    const response = await axios.post(`${API_BASE_URL}/user/quote`, formData);
    if(response){
      console.log("submitted")
    }
    return {
      success: response.data.success,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error in submitQuote:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to submit quote. Please try again.",
    };
  }
};

//  Fetch all users (protected admin endpoint)
export const fetchAllUsers = async (page = 0, size = 10, sortBy = 'id', sortDir = 'asc') => {
  try {
    const response = await API.get(
      `/user/quote/all?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`
    );
    return {
      success: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch quotes',
    };
  }
};
// authService.js

export const deleteUserById = async (id) => {
  try {
    const response = await API.delete(`/user/quote/${id}`);
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Failed to delete user.",
    };
  }
};

