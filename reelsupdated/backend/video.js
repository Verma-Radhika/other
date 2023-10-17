const express = require("express");
const path = require("path");
const cv2 = require("opencv4nodejs");
const app = express();
const server = require("path").Server(app);
const io = require("socket.io")(server);

// .................. Now we need to Capture the Video feed from the local machine..............

app.set('view engine','ejs');
app.get("/" ,(req,res,next)=>{
    res.render('index');
})
const FramesPerSecond = 100;

const Vcap = new cv2.VideoCapture(0);
Vcap.set(cv2.CAP_PROP_FRAME_WIDTH, 500);
Vcap.set(cv2.CAP_PROP_FRAME_HEIGHT, 500);

setInterval(() => {
  const frame = Vcap.read(); // reade the image from video capture (Vcap) every second...
  const image = cv2.imencode(".jpg", frame).toSring("base64"); // encoding image to base64
  to.emit("image", image);
}, 1000 / FramesPerSecond);



server.listen(3030,()=> console.log("listen at port 3030"))


// ...https://github.com/gartner90/socket.io-video-streaming