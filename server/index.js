const path = require('path');
const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const { IO_BROADCAST, IO_SEND_MESSAGE } = require('./contans');

const publicPath = path.join(__dirname, '..', 'public')
const app = express();
const port = process.env.API_PORT || process.env.PORT || 8082;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on(IO_SEND_MESSAGE, data => {
    console.log(IO_SEND_MESSAGE, data);
    socket.broadcast.emit(IO_BROADCAST, {...data, isLocal: false});
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
