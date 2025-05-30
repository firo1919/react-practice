function FareWell({ Languages }) {
	const removedLetters = Languages.filter((a) => a.removed).map((a) => a.name);
	if (removedLetters.length !== 0) {
		return <div className="h-17 mt-4 bg-purple-500 text-white italic flex justify-center items-center rounded-sm text-lg text-center">"Farewell {removedLetters.join(" & ")}"</div>;
	}
	return <div className="h-17 mt-4 text-white italic"></div>;
}
export default FareWell;
