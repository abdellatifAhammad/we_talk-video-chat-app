const socket = io("/");
const videoGrid = document.getElementById("video-box");
const myPeer = new Peer(undefined, {
  host: "b510cfc954a6.ngrok.io",
});
const cpoied = false;
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

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("roomID_share");
  var text = document.getElementById("copied");

  /* Select the text field */
  copyText.select();
  console.log("====================================");
  console.log(copyText.select());
  console.log("====================================");
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  navigator.clipboard.writeText(copyText.value).then(
    function () {
      // texto.style.color = "#3E8C49";
      text.style.display = "block";
      /* Alert the copied text */
      // alert("Copied the text: " + copyText.value);
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
  // /* Copy the text inside the text field */
  // document.execCommand("copy");
}
