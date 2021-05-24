const express = require('express');
const app = express();
const http = require('http').Server(app);
const controller = require('./controllers')
const multer = require('multer')
const storage = multer.memoryStorage()
var form = multer({dest: 'form/', storage: storage})
const io =require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});
const cors = require('cors');
app.use(cors());

app.use('/addAudio', form.single('audio'), controller.s3);


io.on('connection', (socket) => {
  console.log('user connected')
  socket.emit('connected?')
})

http.listen(4000, () => {
  console.log('Socket listening on 4000')
})