const { io } = require('socket.io-client');

const socket = io('https://evato-e-commarce-full-production.up.railway.app', {
  reconnection: true,
});

socket.on('connect', () => {
  console.log('✅ Backend connected to Socket Server:', socket.id);
});

socket.on('disconnect', () => {
  console.log('❌ Backend disconnected from Socket Server');
});

module.exports = socket;
