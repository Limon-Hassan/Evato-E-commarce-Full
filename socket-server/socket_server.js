const { Server } = require('socket.io');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log('✅ User connected:', socket.id);

  socket.on('joinUser', ({ userId }) => socket.join(userId));
  socket.on('joinAdmin', ({ adminId }) => socket.join('adminRoom'));

  socket.on('disconnect', () =>
    console.log('❌ User disconnected:', socket.id)
  );
});

server.listen(5000, () => console.log('Socket server running on port 5000'));
