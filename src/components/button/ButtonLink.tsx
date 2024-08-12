interface ButtonLinkProps {
    text: string;
    href: string;
    className?: string;
    variant?: 'primary' | 'secondary';
    contained?: boolean;
}

const ButtonLink = ({
    text,
    href,
    className,
    variant = 'primary',
    contained = true,
}: ButtonLinkProps) => {
    const primaryColor =
        "text-primary border-primary hover:text-white after:bg-hero after:absolute after:bottom-0 after:left-0 after:-z-10 after:block after:h-full after:w-0 after:transition-all after:content-[''] after:hover:w-full rounded-md border-2 ";

    const secondaryColor =
        "text-white border-white before:absolute before:bottom-0 before:left-0 before:-z-10 before:block before:h-full before:w-0 before:transition-all before:content-[''] before:hover:w-full before:hover:bg-white hover:text-primary rounded-md border-2 ";

    const borderColor = contained
        ? ''
        : 'border-opacity-0 before:hover:rounded-md';

    const color = variant === 'primary' ? primaryColor : secondaryColor;
    return (
        <a href={href} rel="noreferrer" target="_blank">
            <button
                className={`round relative inline-block   px-4 py-2 font-bold transition ease-in-out ${className} ${color} ${borderColor}`}
            >
                {text}
            </button>
        </a>
    );
};

export default ButtonLink;
