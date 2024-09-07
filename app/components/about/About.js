import Image from "next/image";
import antu from "../../asset/images/antu profile.jpg";
import Title from "../shared/Title/Title";

const About = () => {
  return (
    <div className="py-8" id="about">
      <Title>About</Title>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-2 items-center gap-">
        <div className="relative">
          <Image
            src={antu}
            alt="Antu's profile"
            priority
            quality={100}
            className="w-[80%] md:w-[65%] mx-auto rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg font-bold text-center md:text-start text-emerald-500">About Me</p>
          <p className="mt-5 text-slate-700 px-4 md:px-0">
            Hello, everyone! My name is Antu saha, but you can call me Antu. I
            was born and grew up in Chandpur. I am a undergraduated student from
            Barishal university with a degree in chemistry. I’m currently
            working as a chemistry lecturer in platinum-plus coaching center. I
            was involved in numerous extra Curriculum activities throughout with
            my entire student life.
          </p>
          <p className="mt-5 text-slate-700 px-4 md:px-0">
            I’m particularly interested in the intersection of technology and
            user experience, and I’m here today to learn more about emerging
            trends in this field and connect with others who share
            similar interests
          </p>
          <div className="flex justify-center md:justify-start">
          <button className=" mt-5 px-5 py-1.5 bg-gradient-to-br rounded-lg from-emerald-500 to-[#0ABAB5] text-white capitalize">
            Contact{" "}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
