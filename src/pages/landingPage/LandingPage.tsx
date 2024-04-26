import Footer from '@/components/footer/Footer';
import Navbar from '@components/navbar/Navbar';
import About from './section/about/About';
import Contact from './section/contact/Contact';
import Hero from './section/hero/Hero';
import HeroBackground from './section/hero/HeroBackground';
import Projects from './section/projects/Projects';

const LandingPage = () => (
    <>
        <div className={'relative'}>
            {/* There should be a layer ò pattern like th */}
            {/* <SvgLayer /> */}
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
        <HeroBackground />
    </>
);

export default LandingPage;
