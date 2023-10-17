

import React, { useState, useEffect,useRef } from "react";
// import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

// import './App.css';

const VideoFilterApp = () => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   // Load face-api.js models
  //   Promise.all([
  //     faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  //     faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  //   ]).then(() => {
  //     detectFace();
    
  //   });
  // }, []);


useEffect(() => {
  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      // Add any other models you need here
    ]);

    detectFace();
  };

  loadModels();
}, []);
  const detectFace = async () => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const displaySize = { width: image.width, height: image.height };
    faceapi.matchDimensions(canvas, displaySize);

    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    // Clear canvas
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Apply a simple filter overlay (e.g., sunglasses)
    resizedDetections.forEach((detection) => {
      const { landmarks } = detection;
      const leftEye = landmarks.getLeftEye();
      const rightEye = landmarks.getRightEye();

      const glassesWidth = rightEye.x - leftEye.x;
      const glassesHeight = glassesWidth * 0.5; // Adjust as needed

      context.drawImage(
        // sunglassesImage, // Your filter image
        leftEye.x - glassesWidth * 0.25,
        leftEye.y - glassesHeight * 0.5,
        glassesWidth * 1.5,
        glassesHeight
      );
    });
  };

  return (
    <div className="App">
      <img ref={imageRef} src="assets/s.png" alt="Face" onLoad={detectFace} />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default VideoFilterApp;
