function Badge({variant, className}) {

    const variants = {
        simple : "bg-deep-saffron",
        luxury : "bg-charcoal-black",
        rugged : "bg-[#115E59]"
    }
	return (
        <div className={`${variants[variant]} text-white w-19 h-6 flex items-center justify-center rounded-sm ${className} font-semibold text-xs`}>{variant[0].toUpperCase() + variant.slice(1)}</div>
    );
}
export default Badge;
