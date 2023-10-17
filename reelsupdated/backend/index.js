require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
mongoose.connect(
  "mongodb+srv://kishor7008:kishor7008@cluster0.dxn2bgm.mongodb.net/video",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

cloudinary.config({
  cloud_name: "dp5gnv6it",
  api_key: "972195968355472",
  api_secret: "NcUorwbq02sqwO1T_leigH3Ex6I",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "video_uploads",
    resource_type: "video",
  },
});

const upload = multer({ storage: storage });
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  cloudinaryId: String,
  createdAt: { type: Date, default: Date.now },
});

const Video = mongoose.model("Video", videoSchema);

app.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const cloudinaryUploadResponse = await cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: "video",
        folder: "video_uploads",
      }
    );
    const video = new Video({
      title,
      description,
      cloudinaryId: cloudinaryUploadResponse.public_id,
    });
    await video.save();
    res
      .status(201)
      .json({ status: true, message: "Video uploaded successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error uploading video." });
    console.log(error);
  }
});
// .........................get vedio by id  .....
app.get("/get/vedio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const respone = await Video.findOne({ _id: id });
    console.log("response", response);
    return res.status(200).send({
      status: true,
      message: "successfull",
      respone,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      massage: "somthing wrong inside id ....",
      error,
    });
  }
});

app.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find();

    const videosWithUrls = videos.map((video) => {
      const cloudinaryUrl = cloudinary.url(video.cloudinaryId, {
        resource_type: "video",
      });
      return {
        _id: video._id,
        title: video.title,
        description: video.description,
        videoUrl: cloudinaryUrl,
      };
    });

    res.status(200).json(videosWithUrls);
  } catch (error) {
    res.status(500).json({ error: "Error fetching videos." });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});

