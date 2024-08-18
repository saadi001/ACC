import Banner from "./components/banner/Banner";
import Counter from "./components/counter/Counter";
import CourseClasses from "./components/CourseClasses/CourseClasses";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main >
      <div className="container-custom">
      <Navbar />
      <Banner />
      <Counter />
      <CourseClasses />
      <Faq />
      </div>
      <Footer />
    </main>
  );
}
