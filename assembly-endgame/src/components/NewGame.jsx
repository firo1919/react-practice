function NewGame({ resetGame }) {
	return (
		<div className="flex justify-center pt-9">
			<button
				onClick={() => {
					resetGame();
				}}
				className="bg-blue-400 font-bold h-10 w-40 rounded-sm hover:bg-blue-500 active:bg-blue-300"
			>
				New Game
			</button>
		</div>
	);
}
export default NewGame;
