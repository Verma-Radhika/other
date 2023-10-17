const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 4000;
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
// .... clodinary configrations ....
cloudinary.config({
  //   cloud_name: "dp5gnv6it",
  cloud_name: "duvcrpmzz", // api_key: "972195968355472",
  api_key: "735858675753883",
  // api_secret: "NcUorwbq02sqwO1T_leigH3Ex6I",
  api_secret: "Bmp75DutFM4TM0a35wxl30lVqTU",
});

//  .....   for storing file of video .
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files
app.post("/upload", upload.single("video"), async (req, res) => {
  //   const videoPath = new Reels(req.file.path);
  //   videoPath.save();

  // ............................ Connection .....................................

  mongoose.connect(
    "mongodb+srv://rvramayra1998:radhika1234@cluster0.zpkjpcw.mongodb.net/reels",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  // ................................Modale ...........................................
  const reelsSchema = new mongoose.Schema({
    video: { type: String },
  });

  var Reels = mongoose.model("Reels", reelsSchema);
  // .............................................................

  const videoPath = req.file.path;
  console.log("videoPath", videoPath);
  cloudinary.uploader.upload(
    videoPath, //
    { resource_type: "video", folder: "uploads" },
    (error, result) => {
      if (error) {
        console.error("Upload error:", error);
        return res.status(500).json({ error: "Upload failed" });
      }
      // Delete the temporary uploaded file
      fs.unlinkSync(videoPath);

      const response = new Reels({ video: result.url });
      response.save();
      console.log("response", response);
      res.status(200).json({
        // result.url
        statue: true,
        response,
      });
      console.log("result", result);
    }
  );
});

app.get("/video/get", async (req, res) => {
  try {
    const response = await Reels.find();
    // console.log("reposne", response);
    res.status(200).json({
      statue: true,
      response,
    });
  } catch (error) {
    res.status(500).json({
      statue: false,
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
