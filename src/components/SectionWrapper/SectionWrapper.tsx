import styles from '@styles/index';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
    return (
        <section
            className={`
         ${styles.padding}
         mx-auto max-w-7xl ${className}`}
        >
            <span className="absolute" id={id}>
                &nbsp;
            </span>
            {children}
        </section>
    );
};

export default SectionWrapper;
