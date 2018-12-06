const path = require("path");
const port = process.env.PORT || 3000;
const pathPublic = path.join(__dirname, "../public");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);
//set
app.set("view engine", "hbs");
//midleware
app.use(express.static(pathPublic));
//routes
io.on("connection", socket => {
  console.log("New user connected");
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});
//server
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
