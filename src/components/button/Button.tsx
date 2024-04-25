import classes from './Button.module.css';

interface ButtonProps {
    text: string;
    className?: string; // For customized styling
    onClick: () => void;
}

const Button = ({ text, className, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-md border-2 px-4 py-2 ${className}`}
        >
            <span className={classes.text}>{text}</span>
        </button>
    );
};

export default Button;
