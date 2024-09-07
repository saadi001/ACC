import { galleryData } from "@/app/asset/data/gallery";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../shared/Title/Title";

const Gallery = () => {
  return (
    <div id="gallery" className="py-8">
      <Title>My Previous Students</Title>
      <div className="pt-14 pb-8">
        <Marquee pauseOnHover>
          {galleryData?.map((people, i) => {
            return (
              <div key={i} className="w-32 md:w-56 h-48 md:h-72 mx-2 relative">
                <Image
                  src={people?.img}
                  alt="gallery photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-b from-transparent to-black py-2 px-3 text-gray-300">
                  <p className="text-sm md:text-basefont-medium leading-[15px]">{people?.name}</p>
                  <p className="text-xs mt-1">{people?.class}</p>
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
