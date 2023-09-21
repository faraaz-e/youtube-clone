import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
    console.log(videos);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={videos.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
