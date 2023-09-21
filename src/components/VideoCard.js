const VideoCard = ({ info }) => {
  console.log(info);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-1 m-1 w-72">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.high?.url}
      />
      <div className="">
        <label className="text-white font-semibold">
          {info?.snippet?.title}
        </label>
        <p className="text-zinc-400 font-medium text-sm">
          {info?.snippet?.channelTitle}
        </p>
        <p className="text-zinc-400 font-medium text-sm">
          {info?.statistics?.viewCount} views・{info?.snippet?.publishedAt}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
