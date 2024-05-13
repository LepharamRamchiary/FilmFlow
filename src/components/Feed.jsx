import React from "react";
import image from "../assets/download.jpg";

const Feed = () => {
  return (
    <div className="flex h-full w-full bg-red-500 items-center justify-center">
      <div className="grid mt-10 mb-10 p-10 gap-3 w-[1150px] items-center bg-slate-500">
        <div className="flex flex-wrap justify-center">
          {/* Display images in one row */}
          <div className="w-1/4 flex-shrink-0 h-60 items-center flex flex-col justify-center">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          <div className="w-1/4 flex-shrink-0">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          <div className="w-1/4 flex-shrink-0">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          <div className="w-1/4 flex-shrink-0">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          {/* Remaining images will wrap to the next row */}
          <div className="w-1/4 flex-shrink-0">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          <div className="w-1/4 flex-shrink-0">
            <img src={image} alt="vedoio-image" className="h-[300px] w-[200px]"/>
            <h2 className="text-center">title</h2>
          </div>
          {/* Add additional divs as needed */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
