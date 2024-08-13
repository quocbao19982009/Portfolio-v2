import Footer from '@/components/footer/Footer';
import Navbar from '@components/navbar/Navbar';
import About from './section/about/About';
import Contact from './section/contact/Contact';
import Experience from './section/experience/Experience';
import Hero from './section/hero/Hero';
import HeroBackground from './section/hero/HeroBackground';
import Projects from './section/projects/Projects';

const LandingPage = () => (
    <>
        <div id="backdrop" />
        <HeroBackground />
        <div className={'relative z-50'}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    </>
);

export default LandingPage;
