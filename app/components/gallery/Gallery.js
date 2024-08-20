import Image from "next/image";
import Marquee from "react-fast-marquee";
import img from "../../asset/images/antu profile.jpg";
import Title from "../shared/Title/Title";

const Gallery = () => {
  return (
    <div className="py-8">
      <Title>My Previous Students</Title>
      <div className="pt-14 pb-8">
        <Marquee pauseOnHover>
          {[1, 2, 3, 4, 5].map((details, i) => {
            return (
              <div key={i} className="w-56 h-72 mx-2">
                <Image
                  src={img}
                  alt="gallery photo"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
