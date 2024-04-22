import Navbar from '@components/navbar/Navbar';
import SvgLayer from '@components/svgLayer/SvgLayer';
import classes from './LandingPage.module.css';
import About from './section/about/About';
import Hero from './section/hero/Hero';

const LandingPage = () => (
    <div className={classes.landingPage}>
        {/* There should be a layer ò pattern like th */}
        <SvgLayer />
        <Navbar />
        <Hero />
        <About />
    </div>
);

export default LandingPage;
