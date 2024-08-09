import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import { Mail } from '@mui/icons-material';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <h2 className="mb-4 text-center text-4xl font-bold">
                Get In Touch
            </h2>
            <Fade triggerOnce delay={800} cascade direction={'down'}>
                <div className="flex  flex-col items-center justify-center gap-3 text-center">
                    <p>
                        Let's me buy you a cup of coffee. I'm always happy to
                        meet and work with new people. Hit me up if you want to
                        discuss about partnership, collaboration or just chat as
                        friend.
                    </p>
                    <p>
                        <a
                            className="contact-wrapper__text"
                            href="mailto:quocbao19982009@gmail.com"
                        >
                            <Mail className="mr-3" />
                            baonguyendev98@gmail.com
                        </a>
                    </p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="relative  inline-block rounded-md border-2 border-primary px-4 py-2 font-bold text-primary transition ease-in-out after:absolute
                        after:bottom-0 after:left-0  after:-z-10 after:block after:h-full after:w-0 after:bg-hero after:transition-all after:content-[''] hover:text-white after:hover:w-full
                        "
                        href="mailto:baonguyendev98@gmail.com"
                    >
                        <span>Say Hello</span>
                    </a>
                </div>
            </Fade>
        </SectionWrapper>
    );
};

export default Contact;
