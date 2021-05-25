const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser')
const controller = require('./controllers')
const multer = require('multer')
const storage = multer.memoryStorage()
var form = multer({dest: 'form/', storage: storage})
const {v4: uuidV4} = require('uuid');
const io =require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/addAudio', form.single('audio'), controller.s3);



// app.get('/stream', (req, res)=>{
//   res.render('index.ejs', {roomId: req.params.room})
// })

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)
    socket.on('disconnect', ()=> {
      socket.to(roomId).emit('user-disconnect', userId)
    })
  })
})

http.listen(4000, () => {
  console.log('Socket listening on 4000')
})