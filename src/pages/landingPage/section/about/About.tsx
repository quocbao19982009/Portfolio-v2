import profileImg from '@assets/images/profile.jpg';
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import Reveal from 'react-awesome-reveal';
import SkillsSet from './components/SkillList';

const About = () => {
    return (
        <div className="bg-hero">
            <SectionWrapper id="about" className="text-white">
                <div className="">
                    <h2 className="mb-10 text-center text-4xl font-bold">
                        ABOUT ME
                    </h2>
                    <div className=" flex flex-wrap">
                        <Reveal
                            triggerOnce
                            key="image" // Add key prop for better performance
                            delay={600}
                            duration={500} // Add duration prop to control animation time
                            cascade // Add cascade prop for children to animate sequentially
                            className="z-0 flex h-full w-full items-center justify-center px-2 pb-60 sm:h-auto sm:p-0 md:w-1/2"
                        >
                            <img
                                alt="Bao Nguyen"
                                className={`absolute h-auto max-w-full rounded-lg shadow-2xl drop-shadow-lg sm:static`}
                                height="400px"
                                width="300px"
                                src={profileImg}
                            />
                        </Reveal>

                        <Reveal
                            triggerOnce
                            key="info"
                            delay={1000}
                            duration={500}
                            className="flex w-full items-center justify-center gap-3 px-2 md:w-1/2"
                        >
                            <div className="flex flex-col gap-3">
                                <p className="about-wrapper__info-text">
                                    Why honesty? Honesty is at the core of
                                    everything I do. It's not just a value; it's
                                    a guiding principle that shapes every aspect
                                    of my work. I believe in transparent
                                    communication, setting realistic
                                    expectations, and delivering on promises.
                                </p>

                                <p className="about-wrapper__info-text">
                                    Hello there! My name is Bao Nguyen and I am
                                    an{' '}
                                    <span className="font-bold">
                                        Fullstack Web Developer
                                    </span>
                                    .
                                </p>
                                <p className="about-wrapper__info-text">
                                    I started my journey in 2021, where I was
                                    trying to create a website for my
                                    girlfriend. And fast forward, we break up
                                    and I become a competent web developer with
                                    a strong foundation in web development
                                    technologies.
                                </p>

                                <div className="relative">
                                    <button
                                        className="relative z-0 inline-block rounded-md border-2 border-white px-4 py-2 font-bold text-white transition
                                     ease-in-out before:absolute  before:bottom-0 before:left-0 before:-z-10 before:block before:h-full before:w-0 before:transition-all before:content-[''] hover:text-primary
                                     before:hover:w-full before:hover:bg-white
                                     "
                                    >
                                        My Resume
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal
                        triggerOnce
                        key="skills"
                        delay={1500}
                        duration={500}
                        className="w-full"
                    >
                        <SkillsSet />
                    </Reveal>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
