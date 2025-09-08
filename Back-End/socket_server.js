const { Server } = require('socket.io');
const server = require('./main');

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

module.exports = io;
