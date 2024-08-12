import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import ButtonLink from '@/components/button/ButtonLink';
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
                            href="mailto:baonguyendev98@gmail.com"
                        >
                            <Mail className="mr-3" />
                            baonguyendev98@gmail.com
                        </a>
                    </p>
                    <ButtonLink
                        text="Say Hello on LinkedIn"
                        href="https://www.linkedin.com/in/bao-nguyen-dev/"
                    />
                </div>
            </Fade>
        </SectionWrapper>
    );
};

export default Contact;
