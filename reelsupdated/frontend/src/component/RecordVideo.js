import React, { useEffect, useState } from "react";
import { useRecordWebcam } from "react-record-webcam";
import "./style.css";
import {
  BsSkipStartFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillCloudUploadFill,
  BsCameraVideo,
  BsCameraVideoOff,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsCloudUpload } from "react-icons/bs";

export const RecordVideo = ({ onCamera, setOnCamera }) => {
  const recordWebcam = useRecordWebcam({ frameRate: 30 });
  const [show, setShow] = useState(false);

  // ....camera start ....

  useEffect(() => {
    const response = recordWebcam.open;
    return response;
  }, [!onCamera]);

  const saveVideo = async () => {
    const response = await recordWebcam.download();
    console.log("reose", response);
    return response;
  };

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
    let fdata = new FormData();
    fdata.set("video", blob);
    // fdata.set("description", description);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {},
      body: fdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          window.location.reload();
          console.log("data form record video", data);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px", gap: "40px" }}>
      <div>
        {onCamera ? (
          <>
            <video
              ref={recordWebcam.webcamRef}
              autoPlay
              muted
              style={{ width: "100%", maxWidth: "500px" }}
            />
            <div>
              <span style={{ margin: "20px", fontSize: "30px", font: "bold" }}>
                <BsCameraVideo onClick={recordWebcam.start} />
              </span>
              <span style={{ margin: "20px", fontSize: "30px", font: "bold" }}>
                <BsCameraVideoOff onClick={recordWebcam.stop} />
              </span>
              <span style={{ margin: "20px", fontSize: "30px", font: "bold" }}>
                <BsCloudUpload onClick={() => saveVideo()} />
              </span>
              <span style={{ margin: "20px", fontSize: "30px", font: "bold" }}>
                <HiDownload onClick={saveFile} />
              </span>
            </div>
          </>
        ) : (
          ""
        )}{" "}
      </div>
      <video
        ref={recordWebcam.previewRef}
        autoPlay
        muted
        loop
        style={{ width: "100%", maxWidth: "500px", marginTop: "10px" }}
      />
    </div>
  );
};
