import React from "react";
import { Link } from "react-router-dom";
import ImageFallBack from "./ImageFallBack";

const VideoCard = ({ movie }) => {
  const fallbackImageUrl ="https://global.discourse-cdn.com/business7/uploads/firecore/original/3X/9/f/9f5c07a64c1ffc6862cae8306f394e460f8f90b2.jpeg";

  return (
    <Link to={`/movie/${movie?.imdbid}`}>
      <div className="relative h-[250px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] justify-center items-center gap-3">
          <ImageFallBack
            src={movie?.imageurl[0]}
            alt={""}
            fallbackSrc={fallbackImageUrl}
            className="h-[250px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] rounded-md justify-center items-center"
          />
      </div>
    </Link>
  );
};

export default VideoCard;
