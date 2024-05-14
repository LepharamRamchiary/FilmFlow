import React from "react";
import image from "../assets/download.jpg";

const Details = () => {
  return (
    <div className="flex bg-slate-800 md:h-full md:w-full">
      <div className="flex flex-col sm:mt-3 sm:mb-3 sm:ml-4 sm:p-5 mt-3 ml-3 mr-3 p-3 gap-4 md:mt-12 md:mb-12 md:ml-10 md:mr-10 md:p-10 md:flex-row sm:flex-col">
        <div className="w-full md:w-1/2">
          <h1 className="text-white font-semibold text-2xl">Title</h1>
          <span className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ducimus fugit tenetur reprehenderit in impedit temporibus. Laborum
            cupiditate doloremque qui excepturi earum expedita impedit aut,
            assumenda ipsa nesciunt voluptatibus quidem.
          </span>
          <h3 className="text-green-400 font-semibold mt-5">IMDB rating</h3>
        </div>
        <div className="flex sm:w-1/2 md:w-1/2 lg:w-1/2 items-center justify-center md:h-[400px] lg:h-[500px]">
          <img src={image} className="h-full w-full md:h-[300px] lg:h-[400px] md:mb-12" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Details;
