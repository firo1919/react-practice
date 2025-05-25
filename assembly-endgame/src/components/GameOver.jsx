function GameOver({RandomWord}) {
    const word = RandomWord.map(a => a.letter).join("")
	return (
		<div className="h-17 mt-4 bg-red-500 text-white flex flex-col justify-center items-center rounded-sm text-lg">
			<p className="font-bold">Game over! the word was "{word}"</p>
			<p>You lost! better start learning Assembly 😭</p>
		</div>
	);
}
export default GameOver;
