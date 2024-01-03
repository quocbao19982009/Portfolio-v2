import classes from "./Button.module.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string; // For customized styling
  onClick: () => void;
}

const Button = ({ text, icon, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` ${className ? className : ""}  ${classes.button}`}
    >
      <span className={classes.text}>{text}</span>
      <span className={classes.icon}>{icon}</span>
    </button>
  );
};

export default Button;
