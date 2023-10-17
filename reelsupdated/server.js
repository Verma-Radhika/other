// Inside the <script> tag in index.html
const socket = io();
const video = document.getElementById("localVideo");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let peer;

navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
        video.srcObject = stream;

        startButton.addEventListener("click", () => {
            // Initialize the WebRTC peer connection
            peer = new SimplePeer({ initiator: true, stream });

            peer.on("signal", (data) => {
                socket.emit("signal", data);
            });

            peer.on("stream", (remoteStream) => {
                // Display remote stream
                const remoteVideo = document.createElement("video");
                remoteVideo.srcObject = remoteStream;
                document.body.appendChild(remoteVideo);
            });
        });

        stopButton.addEventListener("click", () => {
            // Handle recording stop and peer cleanup
            if (peer) {
                peer.destroy();
                peer = null;
            }
        });
    })
    .catch((error) => {
        console.error("Error accessing webcam:", error);
    });

socket.on("signal", (data) => {
    if (peer) {
        peer.signal(data);
    }
});
