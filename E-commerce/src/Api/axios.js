import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evato-e-commerce.onrender.com',
  withCredentials: true,
});

export default api;
