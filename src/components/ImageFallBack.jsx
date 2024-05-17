import React from "react";

const ImageFallBack = ({ src, alt, fallbackSrc, ...props }) => {
  const handleError = (e) => {
    e.target.src = fallbackSrc;
  };

  return <img src={src} alt={alt} onError={handleError} {...props} />;
};

export default ImageFallBack;
