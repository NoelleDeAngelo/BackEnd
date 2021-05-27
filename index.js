const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const controller = require('./controllers');
const multer = require('multer');
const storage = multer.memoryStorage();
var form = multer({dest: 'form/', storage: storage});
const io =require('socket.io')(http, {
  cors: {
    origin: "http://localhost:8100",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/addAudio', form.single('audio'), controller.s3);


var numClients = {};

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    if (numClients[roomId] === undefined) {
      numClients[roomId] = 1;
    } else {
      numClients[roomId]++;
    }
    io.in(roomId).emit('number-users', numClients[roomId]);
    socket.in(roomId).emit('user-connected', userId);

    socket.on('disconnect', ()=> {
      socket.in(roomId).emit('user-disconnect', userId);
      numClients[roomId]--;
      io.in(roomId).emit('number-users', numClients[roomId]);
      })
    socket.on('rendered',  ()=>{
      io.in(roomId).emit('number-users', numClients[roomId]);
    })
    socket.on('sessionEnded',  ()=>{
      io.in(roomId).emit('session-ended');
    })
  })
})

http.listen(4000, () => {
  console.log('Socket listening on 4000');
})