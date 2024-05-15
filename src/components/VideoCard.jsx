import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <img
            src={video?.thumbnails?.[0].url}
            alt={video?.title}
            className="h-[300px] w-[200px] rounded-md"
          />
        <h2 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-1 text-white font-semibold text-sm text-start">
          {video?.title}
        </h2>
      </div>
    </Link>
  );
};

export default VideoCard;
