function Die({ die, hold }) {

	return <button onClick={() => hold(die.id)} className={die.isHeld ? "bg-green-600 rounded-md flex items-center justify-center shadow-sm font-bold":"bg-white rounded-md flex items-center justify-center shadow-sm font-bold"}>{die.value}</button>;
}
export default Die;
