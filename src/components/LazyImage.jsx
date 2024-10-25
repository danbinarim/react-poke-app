import React from "react";
import { useEffect, useState } from "react";

const LazyImage = ({ url, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setopacity] = useState("opacity-0");

  useEffect(() => {
    isLoading ? setopacity("opacity-0") : setopacity("opacity-100");
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className="absolute h-full  z-10 w-full flex items-center justify-center">
          ...loading
        </div>
      )}

      <img
        src={url}
        alt={alt}
        width="100%"
        height="auto"
        loading="lazy"
        className={`h-full object-contain ${opacity}`}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default LazyImage;
