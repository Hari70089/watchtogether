const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname)));

const rooms = {};

io.on('connection', (socket) => {
  console.log('Connected:', socket.id);

  socket.on('create-room', (roomId) => {
    rooms[roomId] = { host: socket.id, guest: null };
    socket.join(roomId);
    socket.emit('room-created', roomId);
  });

  socket.on('join-room', (roomId) => {
    const room = rooms[roomId];
    if (!room) { socket.emit('error', 'Room not found'); return; }
    room.guest = socket.id;
    socket.join(roomId);
    socket.emit('room-joined', roomId);
    io.to(room.host).emit('guest-joined');
  });

  socket.on('offer', ({ roomId, sdp }) => { socket.to(roomId).emit('offer', sdp); });
  socket.on('answer', ({ roomId, sdp }) => { socket.to(roomId).emit('answer', sdp); });
  socket.on('ice-candidate', ({ roomId, candidate }) => { socket.to(roomId).emit('ice-candidate', candidate); });

  socket.on('video-control', ({ roomId, action, time, muted }) => {
    socket.to(roomId).emit('video-control', { action, time, muted });
  });

  socket.on('chat', ({ roomId, text }) => { socket.to(roomId).emit('chat', text); });

  socket.on('disconnect', () => {
    for (const [id, room] of Object.entries(rooms)) {
      if (room.host === socket.id || room.guest === socket.id) {
        io.to(id).emit('peer-left');
        delete rooms[id];
      }
    }
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on port ${PORT}`));
