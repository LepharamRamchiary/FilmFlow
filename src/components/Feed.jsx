import React from "react";
import image from "../assets/download.jpg";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="flex h-full w-full bg-slate-500 items-center justify-center">
      <div className="grid mt-10 mb-10 p-10 gap-3 w-[1150px] rounded-xl items-center bg-slate-400">
        <div className="flex flex-wrap justify-center gap-4 items-center cursor-pointer">
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
          <Link to="/video">
            <div className="relative h-[300px] w-[200px] rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                src={image}
                alt="vedoio-image"
                className="h-[300px] w-[200px] rounded-md"
              />
              <h2 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-2 text-white font-semibold text-xl text-center">
                title
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feed;
