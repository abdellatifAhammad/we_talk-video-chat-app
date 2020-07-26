const socket = io("/");
const videoGrid = document.getElementById("video-box");
const myPeer = new Peer(undefined, {
  host: "b510cfc954a6.ngrok.io",
});
const people = {};
const myVideo = document.createElement("video");
myVideo.muted = true;
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    addVideo(myVideo, stream);

    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideo(video, userVideoStream);
      });
    });
    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
    socket.on("user-disconnected", (userId) => {
      if (people[userId]) {
        people[userId].close();
      }
    });
  });
myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});
// socket.emit("join-room", ROOM_ID, 10);

// socket.on("user-connected", (userId) => {
//   console.log("====================================");
//   console.log("user ID :" + userId);
//   console.log("====================================");
// });

function addVideo(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideo(video, userVideoStream);
  });
  call.on("close", () => {
    video.remove();
  });

  people[userId] = call;
}
