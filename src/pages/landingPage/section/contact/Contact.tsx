import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import Reveal from 'react-awesome-reveal';

const Contact = () => {
    return (
        <div className="bg-hero">
            <SectionWrapper id="contact" className="text-white">
                <h2 className="mb-4 text-center text-4xl font-bold">
                    Get In Touch
                </h2>
                <Reveal triggerOnce delay={800}>
                    <div className="flex flex-col gap-3 text-center">
                        <p>
                            Let's me buy you a cup of coffee. I'm always happy
                            to meet and work with new people. Hit me up if you
                            want to discuss about partnership, collaboration or
                            just chat as friend.
                        </p>
                        <p>
                            <a
                                className="contact-wrapper__text"
                                href="mailto:quocbao19982009@gmail.com"
                            >
                                <i className="fas fa-envelope-square"></i>{' '}
                                baonguyendev98@gmail.com
                            </a>
                        </p>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-primary relative z-0 inline-block rounded-md border-2 border-white px-4 py-2 font-bold text-white
                            transition ease-in-out  before:absolute before:bottom-0 before:left-0 before:-z-10 before:block before:h-full before:w-0 before:transition-all before:content-['']
                            before:hover:w-full before:hover:bg-white
                    "
                            href="mailto:baonguyendev98@gmail.com"
                        >
                            Say Hello
                        </a>
                    </div>
                </Reveal>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
