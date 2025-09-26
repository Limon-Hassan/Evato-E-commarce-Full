import { io } from 'socket.io-client';

const socket = io('https://evato-e-commerce.onrender.com', {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

socket.on('connect', () => {
  console.log('✅ Connected to socket server:', socket.id);
});

socket.on('connect_error', err => {
  console.error('❌ Socket connection error:', err.message);
});

export default socket;
