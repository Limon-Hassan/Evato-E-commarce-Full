import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evato-e-commerce.onrender.com/api/v2/',
  withCredentials: true,
});

export default api;
