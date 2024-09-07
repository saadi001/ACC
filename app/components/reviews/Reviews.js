import Image from "next/image";
import commentIcon from "../../asset/images/864da2d3-a20a-43de-8c6f-4559278ff486.png";
import img from "../../asset/images/gallaryImage/ammar nd year.jpg";
import Title from "../shared/Title/Title";
import { reviewData } from "@/app/asset/data/review";

const Reviews = () => {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div id="reviews" className="py-8">
      <Title className={"capitalize"}>Reviews from previous students</Title>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {reviewData.map((review, i) => {
          return (
            <div key={i} className="rounded-lg overflow-hidden p-5 border">
              {/* <YouTube videoId="orMHY6fBsmk" opts={opts} className="aspect-video" /> */}
              <Image src={commentIcon} alt="comment icon" className="w-12" />
              <p className="mt-4 text-sm">
                {review?.review}
              </p>
              <div className="flex items-center gap-5 mt-5">
                <Image src={review?.img} alt="review image" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-700">{review?.name}</p>
                  <p className="text-gray-600 text-sm ">{review?.class}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
