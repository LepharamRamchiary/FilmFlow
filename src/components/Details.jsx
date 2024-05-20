// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

// import { fetchDataFromApi } from "../utils/api";
// import { Context } from "../context/contextApi";
// import image from "../assets/download.jpg";

// const Details = () => {
//   const [video, setVideo] = useState();
//   const { id } = useParams();
//   const { setLoading } = useContext(Context);

//   useEffect(() => {
//     document.getElementById("root").classList.add("custom-h");
//     fetchVideoDetails();
//   }, [id]);

//   const fetchVideoDetails = () => {
//     setLoading(true);
//     fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
//       console.log(res);
//       setVideo(res);
//       setLoading(false);
//     });
//   };


//   return (
//     <div className="flex bg-slate-800 md:h-full md:w-full">
//       <div className="flex flex-col sm:mt-3 sm:mb-3 sm:ml-4 sm:p-5 mt-3 ml-3 mr-3 p-3 gap-4 md:mt-12 md:mb-12 md:ml-10 md:mr-10 md:p-10 md:flex-row sm:flex-col">
//         <div className="w-full md:w-1/2">
//           <h1 className="text-white font-semibold text-2xl line-clamp-1">
//             {video?.title}
//           </h1>
//           <p className="text-white mt-3">{video?.description}</p>
//           <h3 className="text-green-400 font-semibold mt-5">IMDB rating</h3>
//         </div>
//         <div className="flex sm:w-1/2 md:w-1/2 lg:w-1/2 items-center justify-center md:h-[400px] lg:h-[500px]">
//           <img src={video?.imageurl[0]} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import image from "../assets/download.jpg";

const Details = () => {
  const [video, setVideo] = useState(null);
  const { imdbid } = useParams(); // This is the imdbid from the URL
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
  }, [imdbid]);

  const fetchVideoDetails = async () => {
    setLoading(true);
    try {
      const res = await fetchDataFromApi(`imdbid=${imdbid}`);
      console.log(res);
      setVideo(res);
    } catch (error) {
      console.error("Error fetching video details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-slate-800 md:h-full md:w-full">
      <div className="flex flex-col sm:mt-3 sm:mb-3 sm:ml-4 sm:p-5 mt-3 ml-3 mr-3 p-3 gap-4 md:mt-12 md:mb-12 md:ml-10 md:mr-10 md:p-10 md:flex-row sm:flex-col">
        <div className="w-full md:w-1/2">
          <h1 className="text-white font-semibold text-2xl line-clamp-1">
            {video?.title}
          </h1>
          <p className="text-white mt-3">{video?.synopsis}</p>
          <h3 className="text-green-400 font-semibold mt-5">IMDB Rating</h3>
          <p className="text-white">{video?.imdbrating}</p> {/* Display IMDB rating */}
          <h3 className="text-green-400 font-semibold mt-5">Released</h3>
          <p className="text-white">{video?.released}</p> {/* Display release year */}
          <h3 className="text-green-400 font-semibold mt-5">Genre</h3>
          <p className="text-white">{video?.genre?.join(", ")}</p> {/* Display genre */}
        </div>
        <div className="flex sm:w-1/2 md:w-1/2 lg:w-1/2 items-center justify-center md:h-[400px] lg:h-[500px]">
          <img src={video?.imageurl ? video.imageurl[0] : image} alt={video?.title} />
        </div>
      </div>
    </div>
  );
};

export default Details;

