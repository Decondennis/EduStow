import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Set your base URL
});

// Get the JWT token from localStorage or any other secure storage
const token = localStorage.getItem('token');

// Set the default Authorization header for all requests
api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default api;
