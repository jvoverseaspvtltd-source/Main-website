import Link from "next/link";

const Button = ({ children, href, onClick, type = "button", variant = "primary", className = "", ...props }) => {
    const baseStyles = "px-6 py-2 rounded-md font-medium transition-colors duration-200";
    const variants = {
        primary: "bg-secondary-green text-white hover:bg-emerald-700 hover:shadow-lg active:scale-95 transform transition-all",
        secondary: "bg-white text-primary-blue border border-gray-200 hover:bg-gray-50 hover:border-primary-blue",
        outline: "border-2 border-primary-blue text-primary-blue hover:bg-blue-50",
        accent: "bg-accent-gold text-primary-blue hover:bg-yellow-500 font-bold",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
