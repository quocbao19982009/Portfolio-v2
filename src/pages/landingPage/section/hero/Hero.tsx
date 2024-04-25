import SectionWrapper from '@components/SectionWrapper/SectionWrapper';

const Hero = () => {
    return (
        <SectionWrapper
            className="align-center flex-start relative z-10 flex h-screen flex-col items-start justify-center gap-3"
            id="hero"
        >
            <h1 className="md:text-md font-mono text-sm font-normal">
                Hi, my name is
            </h1>

            <h2 className="text-secondary m-0 text-4xl font-semibold leading-tight md:text-4xl lg:text-6xl xl:text-6xl">
                Bao Nguyen.
            </h2>
            <p className="m-0 text-3xl font-semibold leading-tight md:text-3xl lg:text-4xl xl:text-5xl">
                I'm a <span className="text-primary italic">honest</span> Web
                Developer
            </p>
            <p className="max-w-lg">
                I specialize in crafting exceptional digital experiences on the
                web, robust backend functionality with visually stunning web
                pages
            </p>
            <button
                className="border-primary  text-primary after:bg-hero relative inline-block rounded-md border-2 px-4 py-2 font-bold transition ease-in-out
                    after:absolute after:bottom-0  after:left-0 after:-z-10 after:block after:h-full after:w-0 after:transition-all after:content-[''] hover:text-white after:hover:w-full
                    "
            >
                Know more
            </button>
        </SectionWrapper>
    );
};

export default Hero;
