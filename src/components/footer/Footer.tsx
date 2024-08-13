import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=" bg-gray-600  text-white">
            <SectionWrapper
                id="footer"
                className="flex flex-col items-center justify-center gap-3 text-center"
            >
                <a aria-label="back to top" rel="noreferrer" href="#top">
                    <KeyboardArrowUpIcon
                        sx={{
                            fontSize: '2.5rem',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                    />
                </a>
                <div className="flex gap-5">
                    <a
                        aria-label="Bao's linkedin"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/bao-nguyen-44ba20165/"
                        target="_blank"
                    >
                        <LinkedInIcon
                            sx={{
                                fontSize: '2rem',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        />
                    </a>
                    <a
                        aria-label="Bao's linkedin"
                        rel="noreferrer"
                        href="https://github.com/quocbao19982009"
                        target="_blank"
                    >
                        <GitHubIcon
                            sx={{
                                fontSize: '2rem',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        />
                    </a>
                </div>

                <hr className="mt-3 w-full" />

                <p>
                    {year} - Build by{' '}
                    <a
                        rel="noreferrer"
                        href="https://github.com/quocbao19982009"
                        target="_blank"
                        aria-label="Bao's linkedin"
                    >
                        Bao Nguyen
                    </a>
                </p>
            </SectionWrapper>
        </footer>
    );
};

export default Footer;
