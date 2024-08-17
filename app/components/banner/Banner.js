import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import imgBanner from "../../asset/images/antu banner.png";
import book1 from "../../asset/images/books1.png";
import book2 from "../../asset/images/books2.png";
import book3 from "../../asset/images/books3.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-1 py-12 items-center">
      <div>
        <h3 className="text-[54px] text-slate-800 leading-none font-semibold">
          Make Design That <br /> Engage, Delight <br /> and Connect
        </h3>
        <p className="text-gray-700 mt-14">
          Hi, I'm antu saha! With more than 10 years of experience, <br />
          I&aposm ready to be a part of your wonderful project.{" "}
        </p>
        <div className="mt-8 flex items-center gap-6">
          <button className="px-5 py-1.5 bg-gradient-to-br rounded-lg from-emerald-500 to-[#0ABAB5] text-white capitalize">
            join now
          </button>
          <button className="flex items-center gap-2">
            Previous Works <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
      <div className="">
        <div className="w-[79%] mx-auto rounded-full z-40 relative">
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
            className="absolute top-5 right-14 w-16 bg-white shadow-[0 0 50px #ccc] rounded-full p-2"
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
            className="absolute bottom-2 right-20 w-16 h-16 bg-white shadow-[0 0 50px #ccc] rounded-full p-"
          >
            <Image
              src={book3}
              alt="books"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
