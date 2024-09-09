import Image from "next/image";

import imgBanner from "../../asset/images/antu banner.png";
import book1 from "../../asset/images/books1.png";
import book2 from "../../asset/images/books2.png";
import book3 from "../../asset/images/books3.jpg";
import BannerLinkButton from "../shared/BannerLinkButton/BannerLinkButton";
import PreviosStudentsButton from "../shared/PreviosStudentsButton";

const Banner = () => {
  // sm	640px
  // md	768px
  // lg	1024px
  // xl	1280px
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-1 py-12 items-center">
      <div className="">
        <h3 className="text-[35px] md:text-[50px] text-slate-800 text-center md:text-start leading-9 md:leading-[60px] font-semibold">
          Your Journey Through The Chemical World Starts Here
        </h3>
        <p className="text-gray-700 text-center md:text-start mt-8 md:mt-12 text-sm md:text-base">
          With 4 years of dedicated teaching experience and currently pursuing
          advanced studies in chemistry at Barishal University, I bring both
          practical knowledge and cutting-edge academic insights to every
          lesson.
        </p>
        <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
          <BannerLinkButton />
          <PreviosStudentsButton />
        </div>
      </div>
      <div className="">
        <div className="w-[79%] mx-auto rounded-full z-10 relative">
          {" "}
          <Image
            src={imgBanner}
            alt="banner photo"
            className="z-10 "
            quality={100}
            priority
          />
          <div
            style={{ boxShadow: "0 0 50px #ccc" }}
            className="absolute top-1 sm:top-3  md:top-5 right-5 sm:right-10 md:right-14 w-16 bg-white shadow-[0 0 50px #ccc] rounded-full p-2"
          >
            <Image
              src={book1}
              alt="books"
              className=" w-full object-cover -ml-[2px]"
            />
          </div>
          <div
            style={{ boxShadow: "0 0 50px #ccc" }}
            className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 bg-white shadow-[0 0 50px #ccc] rounded-full p-3"
          >
            <Image src={book2} alt="books" className=" w-full object-cover " />
          </div>
          <div
            style={{ boxShadow: "0 0 50px #ccc" }}
            className="absolute bottom-1 md:bottom-2 right-12 md:right-20 w-16 h-16 bg-white shadow-[0 0 50px #ccc] rounded-full p-"
          >
            <Image
              src={book3}
              alt="books"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
