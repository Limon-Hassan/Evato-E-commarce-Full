import { io } from 'socket.io-client';

const socket = io('https://evato-e-commerce.onrender.com/', {
  withCredentials: true,
});

export default socket;
