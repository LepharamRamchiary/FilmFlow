import React from "react";

const ImageFallBack = ({ src, alt, fallbackSrc, ...props }) => {
  const handleError = (e) => {
    e.target.src = fallbackSrc;
  };

  return <img src={src} alt={alt} onError={handleError} {...props} className="h-[250px] md:h-[300px] md:w-[200px] lg:h-[300px] lg:w-[200px] rounded-md justify-center items-center"/>;
};

export default ImageFallBack;
