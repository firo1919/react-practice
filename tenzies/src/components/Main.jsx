import Die from "./Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Main() {
	const [dices, setDices] = useState([]);

	function allNewDice() {
		let ans = [];

		for (let i = 0; i < 10; i++) {
			let rand = Math.floor(Math.random() * 6 + 1);
			ans.push({ value: rand, isHeld: false, id: nanoid() });
		}

		return ans;
	}

	function hold(id) {
        setDices((oldDices => {
            return oldDices.map(die => {
                return die.id == id ? {...die, isHeld:!die.isHeld}:die
            })
        }))
            
	}
	function rollDices() {
		setDices(oldDices =>{
            return oldDices.map(die => {
                return !die.isHeld ? {...die, value:Math.floor(Math.random() * 6 + 1)} : die
            })
        });
	}
	useEffect(() => {
		setDices(allNewDice);
	}, []);
	console.log(dices);
	return (
		<div className="w-dvw h-dvh flex items-center justify-center">
			<div className="w-90 h-96 bg-[#0B2434] relative">
				<div className="absolute top-6 bottom-6 right-5 left-5 rounded-xl bg-[#F5F5F5] flex flex-col items-center py-8 px-4 gap-4">
					<h1 className="font-bold text-2xl">Tenzies</h1>
					<p className="text-[#4A4E74] text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
					<div className="grid grid-cols-5 grid-rows-2 w-full h-full gap-4">
						{dices.map((a) => (
							<Die key={a.id} die={a} hold={hold} />
						))}
					</div>
					<button className="bg-blue-700 rounded-sm text-white font-bold w-30 h-20 hover:bg-blue-800 active:bg-blue-600" onClick={rollDices}>
						Roll
					</button>
				</div>
			</div>
		</div>
	);
}
export default Main;
