import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard"

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-full w-full bg-slate-500 items-center justify-center">
      <div className="grid mt-10 mb-10 p-10 gap-3 w-[1150px] rounded-xl items-center bg-slate-400">
        <div className="flex flex-wrap justify-center gap-4 items-center cursor-pointer">
          {!loading &&
            searchResults &&
            searchResults.map((item) => {
              if (item?.type !== "video") {
                return false;
              }
              return <VideoCard key={item?.video?.videoId} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
