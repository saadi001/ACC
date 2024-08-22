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
      <Title className={"capitalize"}>Reviews from previous students</Title>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {[1, 2, 3].map((video, i) => {
          return (
            <div key={i} className="rounded-lg overflow-hidden">
              <YouTube videoId="orMHY6fBsmk" opts={opts} className="aspect-video" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
