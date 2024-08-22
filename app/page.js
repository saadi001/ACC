import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Counter from "./components/counter/Counter";
import CourseClasses from "./components/CourseClasses/CourseClasses";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Navbar from "./components/navbar/Navbar";
import Reviews from "./components/reviews/Reviews";

export default function Home() {
  return (
    <main>
      <div className="container-custom">
        <Navbar />
        <Banner />
        <Counter />
        <About />
        <CourseClasses />
        <Gallery />
        <Reviews />
        <Contact />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
