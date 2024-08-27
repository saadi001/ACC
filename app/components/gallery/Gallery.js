import Image from "next/image";
import Marquee from "react-fast-marquee";
import img from "../../asset/images/antu profile.jpg";
import Title from "../shared/Title/Title";
import { Dog, SaladIcon } from "lucide-react";

const Gallery = () => {
  return (
    <div className="py-8">
      <Title>My Previous Students</Title>
      <div className="pt-14 pb-8">
        <Marquee pauseOnHover>
          {[1, 2, 3, 4, 5].map((details, i) => {
            return (
              <div key={i} className="w-56 h-72 mx-2 relative">
                <Image
                  src={img}
                  alt="gallery photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0">
                  <p>hello</p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
