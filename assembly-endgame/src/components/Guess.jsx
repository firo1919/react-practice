function Guess({letter}) {
	return (
        <div className="w-10 h-10 border-[#323232] border-b-white  bg-[#323232] border-2 flex items-center justify-center text-white">{letter.guessed ? letter.letter : ""}</div>
    );
}
export default Guess;
