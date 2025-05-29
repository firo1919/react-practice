function Badge({variant, color, children}) {
    /* all supported classes for color props 

    bg-gray-100 text-gray-950
    bg-yellow-100 text-yellow-950
    bg-red-100 text-red-950
    bg-green-100 text-green-950
    bg-blue-100 text-blue-950
    bg-indigo-100 text-indigo-950
    bg-purple-100 text-purple-950
    bg-pink-100 text-pink-950

    */
	return (
        <div className={`m-2 w-17 h-6 px-3 py-0.5 flex items-center justify-center bg-${color}-100 text-${color}-950 ${variant=="square" ? "rounded-sm":"rounded-full"} font-medium text-sm`}>{children}</div>
    );
}
export default Badge;
