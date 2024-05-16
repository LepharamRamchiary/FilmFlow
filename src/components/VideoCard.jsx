import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="relative h-[250px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <img
            src={video?.thumbnails?.[0].url}
            alt={video?.title}
            className="h-[250px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] rounded-md"
          />
        <h2 className="absolute bottom-3 p-2 line-clamp-0 text-white text-sm text-center justify-centerst">
          {video?.title}
        </h2>
      </div>
    </Link>
  );
};

export default VideoCard;
