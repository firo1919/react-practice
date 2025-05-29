function Badge({variant="square", color="gray", children}) {

    const colors = {
        gray : "bg-gray-100 text-gray-950",
        yellow : "bg-yellow-100 text-yellow-950",
        red : "bg-red-100 text-red-950",
        green : "bg-green-100 text-green-950",
        blue : "bg-blue-100 text-blue-950",
        indigo : "bg-indigo-100 text-indigo-950",
        purple : "bg-purple-100 text-purple-950",
        pink : "bg-pink-100 text-pink-950",
    }

    const variants = {
        square : "rounded-sm",
        pill : "rounded-full"
    }
    
	return (
        <div className={`m-2 w-17 h-6 px-3 py-0.5 flex items-center justify-center ${colors[color]} ${variants[variant]} font-medium text-sm`}>{children}</div>
    );
}
export default Badge;
