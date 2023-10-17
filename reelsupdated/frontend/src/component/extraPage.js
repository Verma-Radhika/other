import React from "react";
import { useRef } from "react";
import Spinner from "./Spinner";
import { useState } from "react";

export default function Upload() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const [videoFile, setVideoFile] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    console.log("clicked");
    inputRef1.current.click();
  };



  const handelSubmit1 = (e) => {
    e.preventDefault(); 
    setShow(true);
    let fdata = new FormData();
    fdata.set("video", videoFile);
    fdata.set("description", description);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers,
      body: fdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          window.location.reload();
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
    <div class="news-feed news-feed-form">

        <div className="selfReels"> </div>
      <h3 class="news-feed-title">Create New Post</h3>{" "}
      <form>
        {" "}
        <div class="form-group">
          {" "}
          <textarea
            name="message"
            class="form-control"
            placeholder="Write something here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>{" "}
        </div>{" "}
        {videoFile && (
          <div className="shareImgContainer">
            {" "}
            <video width="640" height="360" controls autoplay>
              {" "}
              <source
                src={URL.createObjectURL(videoFile)}
                type="video/mp4"
              />{" "}
            </video>
            <br />{" "}
            <div className="d-flex justify-content-end">
              {" "}
              <button
                className="btn btn-warning"
                style={{ margin: "10px" }}
                onClick={() => setVideoFile(null)}
              >
                CANCEL
              </button>{" "}
              {show ? (
                <Spinner />
              ) : (
                <button
                  className="btn btn-primary"
                  style={{ margin: "10px" }}
                  onClick={(e) => handelSubmit1(e)}
                >
                  POST
                </button>
              )}{" "}
            </div>{" "}
          </div>
        )}{" "}
        <ul class="button-group d-flex justify-content-between align-items-center">
          {" "}
          <li class="video-btn">
            {" "}
            <input
              style={{ display: "none" }}
              ref={inputRef1}
              type="file"
              onChange={(e) => {
                setVideoFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
              accept=" video/*"
            />{" "}
            <button type="submit" onClick={(e) => handleClick1(e)}>
              <i class="flaticon-video"></i> Video
            </button>{" "}
          </li>{" "} 
          {/*  */}
          <li class="tag-btn">
            {" "}
            <button type="submit">
              <i class="flaticon-tag"></i> Tag Friends
            </button>{" "}
          </li>
          <li class="post-btn"> </li>{" "}
        </ul>{" "}
      </form>{" "}
    </div>
  );
}
