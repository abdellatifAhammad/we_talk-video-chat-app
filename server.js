const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");
// @engine :ejs
app.set("view engine", "ejs");

// @static folder
app.use(express.static("public"));

// @route
app.get("/", (req, res) => {
  // res.redirect(`/${uuidV4()}`);
  res.redirect(`/home`);
});
///
app.get("/create", (req, res) => {
  res.redirect(`/create_room/${uuidV4()}`);
});
//
app.get("/create_room/:new_room", (req, res) => {
  res.render("new_room", { roomId: req.params.new_room });
});

// /
app.get("/rooms/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});
// home page
app.get("/home", (req, res) => {
  res.render("home");
});
//@socket.io conf

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    // console.log("====================================");
    // console.log(roomId, userId);
    // console.log("====================================");
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

//@port :3000
server.listen(3000);
