const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-1 m-1 w-72">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={snippet?.thumbnails?.high?.url}
      />
      <div className="">
        <label className="text-white font-semibold">
          {snippet?.title}
        </label>
        <p className="text-zinc-400 font-medium text-sm">
          {snippet?.channelTitle}
        </p>
        <p className="text-zinc-400 font-medium text-sm">
          {statistics?.viewCount} views・{snippet?.publishedAt}
        </p>
      </div>
    </div>
  );
};

// Higher Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-zinc-800">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
