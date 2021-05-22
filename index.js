const express = require('express');
const app = express();
const http = require('http').Server(app);
const io =require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
const cors = require('cors');

app.use(cors());


io.on('connection', (socket) => {
  console.log('user connected')
  socket.emit('connected?')
})

http.listen(4000, () => {
  console.log('Socket listening on 4000')
})