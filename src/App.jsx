import About from "./components/About.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Contact from "./components/Contact.jsx";
import Experiences from "./components/Experiences.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Rooms from "./components/Rooms.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-cream focus:px-4 focus:py-3 focus:text-charcoal"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Rooms />
        <Experiences />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
