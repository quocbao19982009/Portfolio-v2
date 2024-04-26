import profileImg from '@assets/images/profile.jpg';
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import { Fade } from 'react-awesome-reveal';
import SkillsSet from './components/SkillList';

const About = () => {
    const animationCondition = window.innerWidth > 768 ? true : false;
    return (
        <div className="bg-hero ">
            <SectionWrapper id="about" className="text-white">
                <h2 className="mb-10 text-center text-4xl font-bold">
                    ABOUT ME
                </h2>
                <div className=" flex flex-wrap">
                    <Fade
                        triggerOnce
                        key="image" // Add key prop for better performance
                        delay={600}
                        direction="left"
                        className="z-0 flex h-full w-full items-center justify-center px-2 pb-60 sm:h-auto sm:pb-0 md:w-1/2"
                    >
                        <img
                            alt="Bao Nguyen"
                            className={`absolute h-auto max-w-full rounded-lg shadow-2xl drop-shadow-lg sm:static`}
                            height="400px"
                            width="300px"
                            src={profileImg}
                        />
                    </Fade>

                    <Fade
                        triggerOnce
                        key="info"
                        delay={1000}
                        direction={animationCondition ? 'right' : 'down'}
                        className="flex w-full items-center justify-center gap-3 px-2 sm:pt-6 md:w-1/2"
                    >
                        <div className="flex flex-col gap-3">
                            <p>
                                Hello there! My name is Bao Nguyen and I am a{' '}
                                <span className="font-bold">
                                    Fullstack Web Developer
                                </span>
                                .
                            </p>
                            <p>
                                I started my journey in 2021, where I was trying
                                to create a website for my girlfriend. And fast
                                forward, we broke up and I become a nerd for web
                                developer with a strong foundation in web
                                development technologies.
                            </p>
                            <p>
                                I'm a mid-level Jack-of-All-Trade web developer.
                                React is my bread and butter, but I'm also
                                comfortable with NodeJS, Express, C# and .Net.
                                For DevOps, I have experience with Docker, AWS,
                                and Github Action. I'm also familiar with SQL
                                and NoSQL databases. And what I doesn't know
                                now, I will learn it in the future.
                            </p>

                            <button
                                className="relative z-0 inline-block rounded-md border-2 border-white px-4 py-2 font-bold text-white transition
                                     ease-in-out before:absolute  before:bottom-0 before:left-0 before:-z-10 before:block before:h-full before:w-0 before:transition-all before:content-[''] hover:text-primary
                                     before:hover:w-full before:hover:bg-white
                                     "
                            >
                                My Resume
                            </button>
                        </div>
                    </Fade>
                </div>
                <Fade
                    triggerOnce
                    key="skills"
                    direction="down"
                    className="w-full"
                >
                    <SkillsSet />
                </Fade>
            </SectionWrapper>
        </div>
    );
};

export default About;
