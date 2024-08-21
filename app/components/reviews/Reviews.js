"use client";

import YouTube from "react-youtube";
import Title from "../shared/Title/Title";

const Reviews = () => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="py-8">
      <Title>Reviews from previous students</Title>
      <div className="pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 asp">
        {[1, 2, 3].map((video, i) => {
          return (
            <YouTube
              key={i}
              videoId="orMHY6fBsmk"
              opts={opts}
              className="aspect-video"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
