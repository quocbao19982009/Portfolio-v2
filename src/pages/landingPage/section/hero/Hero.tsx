import SectionWrapper from "@components/SectionWrapper/SectionWrapper";
import Button from "@components/button/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    // Need to customize hero background
    <div className={classes.hero}>
      <SectionWrapper id="hero">
        {/* These are the pattern, maybe or maybe not future */}
        <div className={classes.textContainer}>
          <div className={classes.mainText}>
            <span className={classes.smallFont}>I’m</span> Bao Nguyen,
            <br />
            <span className={classes.highlightText}>Full-Stack</span>
            <br />
            Developer
          </div>{" "}
          <p className={classes.shortIntroduction}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button
            text={"My Resume"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          ></Button>
          <a>Contact me</a>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
