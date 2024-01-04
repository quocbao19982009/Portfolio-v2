import styles from '@styles/index'

interface SectionWrapperProps {
    children: React.ReactNode
    id: string
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
    return (
        // Maybe a z-index need here
        <section className={`${styles.padding} mx-auto max-w-7xl`}>
            <span className="hash-span" id={id}>
                &nbsp;
            </span>
            {children}
        </section>
    )
}

export default SectionWrapper
