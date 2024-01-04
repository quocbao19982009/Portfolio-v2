import SectionWrapper from '@components/SectionWrapper/SectionWrapper'
import Button from '@components/button/Button'

const Hero = () => {
    return (
        // Need to customize hero background
        <div
            className={'bg-hero z-0 flex h-screen items-center justify-center'}
        >
            <SectionWrapper id="hero">
                {/* These are the pattern, maybe or maybe not future */}
                <div
                    className={
                        'flex flex-col items-center justify-center gap-4'
                    }
                >
                    <div className={'text-center text-4xl font-bold'}>
                        <span className={'font-normal'}>I’m </span>
                        Bao Nguyen,
                        <br />
                        <span className={'font-bold text-primary'}>
                            Full-Stack
                        </span>
                        <br />
                        Developer
                    </div>
                    <p className="text-center font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button
                        className="mt-4"
                        text={'My Resume'}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></Button>
                    <a className="px-2  py-4 text-base font-bold">Contact me</a>
                </div>
            </SectionWrapper>
        </div>
    )
}

export default Hero
