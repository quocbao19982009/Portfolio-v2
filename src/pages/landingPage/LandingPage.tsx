import Navbar from '@components/navbar/Navbar';
import About from './section/about/About';
import Hero from './section/hero/Hero';
import HeroBackground from './section/hero/HeroBackground';

const LandingPage = () => (
    <>
        <div className={'relative'}>
            {/* There should be a layer ò pattern like th */}
            {/* <SvgLayer /> */}
            <Navbar />
            <Hero />
            <About />
        </div>
        <HeroBackground />
    </>
);

export default LandingPage;
