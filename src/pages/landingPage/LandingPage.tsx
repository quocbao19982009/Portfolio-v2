import Navbar from "@components/navbar/Navbar";
import About from "./section/about/About";
import Hero from "./section/hero/Hero";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default LandingPage;
