import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Counter from "./components/counter/Counter";
import CourseClasses from "./components/CourseClasses/CourseClasses";
import Faq from "./components/FAQ/Faq";

export default function Home() {
  return (
    <main className="container-custom">
      <Navbar/>
      <Banner/>
      <Counter/>
      <CourseClasses/>
      <Faq/>
    </main>
  );
}
