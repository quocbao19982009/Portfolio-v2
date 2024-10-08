import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import ButtonLink from '@/components/button/ButtonLink';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
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
                <p className="font-mono text-sm font-normal md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Hi, my name is
                </p>

                <p className="m-0 text-4xl font-semibold  text-secondary md:text-4xl lg:text-7xl">
                    Bao Nguyen.
                </p>
                <p className="m-0 text-3xl font-semibold  md:text-3xl lg:text-4xl xl:text-5xl">
                    I'm a{' '}
                    <span>
                        <Popover key="test">
                            <PopoverTrigger className="relative">
                                <span className=" scale-x-0 transform italic text-primary transition-transform duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:-z-10 before:block  before:h-1 before:w-full  before:origin-right before:scale-x-0 before:transition-all before:content-[''] before:hover:w-full hover:before:origin-left hover:before:scale-x-100 before:hover:border-b-2 before:hover:border-primary">
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
                <ButtonLink href={'#about'} text="Know More" />
            </Fade>
        </SectionWrapper>
    );
};

export default Hero;
