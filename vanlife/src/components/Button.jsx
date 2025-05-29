function Button({className, children}) {
	return (
        <button className={`bg-deep-saffron text-white font-bold text-sm h-12 w-full rounded-sm ${className}`}>{children}</button>
    );
}
export default Button;
