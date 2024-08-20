import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Counter from "./components/counter/Counter";
import CourseClasses from "./components/CourseClasses/CourseClasses";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main >
      <div className="container-custom">
      <Navbar />
      <Banner />
      <Counter />
      <About/>
      <CourseClasses />
      <Gallery/>
      <Faq />
      </div>
      <Footer />
    </main>
  );
}
