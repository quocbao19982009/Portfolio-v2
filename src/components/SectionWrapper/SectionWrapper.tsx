import styles from "@styles/index";


interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
  return (
    <section className={`${styles.padding}`}>
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
      {children}
    </section>
  );
};

export default SectionWrapper;
