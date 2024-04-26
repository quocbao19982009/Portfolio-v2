import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
    const animationCondition = window.innerWidth > 768 ? true : false;
    return (
        // TODO: Change font-size depend on screen size, change color, change spacing

        <SectionWrapper
            className="align-center flex-start relative z-10  flex h-screen flex-col items-start justify-center gap-3"
            id="hero"
        >
            <Fade
                delay={500}
                direction={animationCondition ? 'left' : 'down'}
                triggerOnce
            >
                <h1 className="font-mono text-sm font-normal md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Hi, my name is
                </h1>

                <h2 className="m-0 text-4xl font-semibold leading-tight text-secondary md:text-4xl lg:text-7xl">
                    Bao Nguyen.
                </h2>
                <p className="m-0 text-3xl font-semibold leading-tight md:text-3xl lg:text-4xl xl:text-5xl">
                    I'm a{' '}
                    <span>
                        <Popover key="test">
                            <PopoverTrigger>
                                <span className="italic text-primary">
                                    honest
                                </span>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="text-sm">
                                    Why honesty? Honesty is at the core of
                                    everything I do. It's not just a value; it's
                                    a guiding principle that shapes every aspect
                                    of my work. I believe in transparent
                                    communication, setting realistic
                                    expectations, and delivering on promises.
                                </div>
                            </PopoverContent>
                        </Popover>
                    </span>{' '}
                    Web Developer
                </p>
                <p className="max-w-lg">
                    I specialize in crafting exceptional digital experiences on
                    the web, robust backend functionality with visually stunning
                    web pages
                </p>
            </Fade>
            <Fade delay={1000} direction="left" triggerOnce>
                <button
                    className="relative  inline-block rounded-md border-2 border-primary px-4 py-2 font-bold text-primary transition ease-in-out after:absolute
                    after:bottom-0 after:left-0  after:-z-10 after:block after:h-full after:w-0 after:bg-hero after:transition-all after:content-[''] hover:text-white after:hover:w-full
                    "
                >
                    Know more
                </button>
            </Fade>
        </SectionWrapper>
    );
};

export default Hero;
