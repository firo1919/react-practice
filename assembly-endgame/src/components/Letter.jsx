function Letter({ letter, PickLetter, gameOver }) {
	return (
		<button disabled={letter.clicked | gameOver} onClick={() => PickLetter(letter.letter)} className={!letter.clicked ? "bg-yellow-500 font-bold w-10 h-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-yellow-600 active:bg-yellow-300 border border-white" : letter.rightLetter ? "bg-green-500 font-bold w-10 h-10 cursor-pointer flex items-center justify-center rounded-md border border-white" : "bg-red-500 font-bold w-10 h-10 cursor-pointer flex items-center justify-center rounded-md border border-white"}>
			{letter.letter}
		</button>
	);
}
export default Letter;
