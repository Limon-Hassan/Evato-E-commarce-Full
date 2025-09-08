let express = require('express');
require('dotenv').config();
var cookieParser = require('cookie-parser');
const router = require('./Router/main');
const dbConnection = require('./Config/dbconfig');
const { ErrorCheck } = require('./Halper/ErrorCheck');
let http = require('http');
let cors = require('cors');
let app = express();
const { init: initSocket } = require('./socket_server');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

let server = http.createServer(app);
const io = initSocket(server);
io.on('connection', socket => {
  console.log('✅ User connected:', socket.id);
  socket.on('joinUser', ({ userId }) => {
    socket.join(userId);
    console.log(`👤 User ${userId} joined their private room`);
  });
  socket.on('joinAdmin', ({ adminId }) => {
    socket.join('adminRoom');
    console.log(`👑 Admin ${adminId} joined adminRoom`);
  });
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

app.use('/uploads', express.static('uploads'));
app.use('/product', express.static('productPhoto'));
app.use(router);
app.use(ErrorCheck);
dbConnection();
app.get('/', (req, res) => {
  res.send('Hello World !');
});

const PORT = process.env.PORT || 44044;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = { app, server };
