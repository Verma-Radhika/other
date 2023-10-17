import logo from "./logo.svg";
import "./App.css";
import Upload from "./component/Upload";
import PostCard from "./component/PostCard";
import { RecordVideo } from "./component/RecordVideo";
import VideoFilterApp from "./component/ExtraFile";
// import InstagramFilterApp, { ExtraFile } from './component/ExtraFile';
//
function App() {
  return (
    <>
      <div class="col-lg-6 col-md-12" style={{ margin: "auto" }}>
        <div class="news-feed-area">
          <Upload />
          <PostCard />
          <VideoFilterApp />
          <div class="load-more-posts-btn">
            <a href="#">
              <i class="flaticon-loading"></i> Load More Posts
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
