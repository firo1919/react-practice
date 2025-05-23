import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Letter from "./Letter";
import Language from "./Language";
import Guess from "./Guess";
import NewGame from "./NewGame";
import GameWon from "./GameWon";
import GameOver from "./GameOver";
import FareWell from "./FareWell";
import Confetti from "react-confetti";

function Main() {
	const [languages, setLanguages] = useState([]);
	const [randomLetter, setRandomLetter] = useState([]);
	const [letters, setLetters] = useState([]);

	const gamewon = gameWon();
	const gameover = gameOver();

	useEffect(() => {
		document.title = "Assembly: Endgame";
		getNewRandomWord();
		resetLetters();
		resetLanguages();
	}, []);

	function gameWon() {
		if (randomLetter.length !== 0) {
			for (let elem of randomLetter) {
				if (!elem.guessed) {
					return false;
				}
			}

			return true;
		}

		return false;
	}

	function resetGame() {
		getNewRandomWord();
		resetLetters();
		resetLanguages();
	}

	function resetLetters() {
		setLetters([
			{ letter: "A", clicked: false, rightLetter: false },
			{ letter: "B", clicked: false, rightLetter: false },
			{ letter: "C", clicked: false, rightLetter: false },
			{ letter: "D", clicked: false, rightLetter: false },
			{ letter: "E", clicked: false, rightLetter: false },
			{ letter: "F", clicked: false, rightLetter: false },
			{ letter: "G", clicked: false, rightLetter: false },
			{ letter: "H", clicked: false, rightLetter: false },
			{ letter: "I", clicked: false, rightLetter: false },
			{ letter: "J", clicked: false, rightLetter: false },
			{ letter: "K", clicked: false, rightLetter: false },
			{ letter: "L", clicked: false, rightLetter: false },
			{ letter: "M", clicked: false, rightLetter: false },
			{ letter: "N", clicked: false, rightLetter: false },
			{ letter: "O", clicked: false, rightLetter: false },
			{ letter: "P", clicked: false, rightLetter: false },
			{ letter: "Q", clicked: false, rightLetter: false },
			{ letter: "R", clicked: false, rightLetter: false },
			{ letter: "S", clicked: false, rightLetter: false },
			{ letter: "T", clicked: false, rightLetter: false },
			{ letter: "U", clicked: false, rightLetter: false },
			{ letter: "V", clicked: false, rightLetter: false },
			{ letter: "W", clicked: false, rightLetter: false },
			{ letter: "X", clicked: false, rightLetter: false },
			{ letter: "Y", clicked: false, rightLetter: false },
			{ letter: "Z", clicked: false, rightLetter: false },
		]);
	}

	function resetLanguages() {
		setLanguages([
			{ name: "HTML", removed: false, color: "#E2680F" },
			{ name: "CSS", removed: false, color: "#328AF1" },
			{ name: "Javascript", removed: false, color: "#F4EB13" },
			{ name: "React", removed: false, color: "#2ED3E9" },
			{ name: "Typscript", removed: false, color: "#298EC6" },
			{ name: "Node.js", removed: false, color: "#599137" },
			{ name: "Python", removed: false, color: "#FFD742" },
			{ name: "Ruby", removed: false, color: "#D02B2B" },
			{ name: "Assembly", removed: false, color: "#2D519F" },
		]);
	}

	function gameOver() {
		if (languages.length !== 0) {
			for (let elem of languages) {
				if (!elem.removed) {
					return false;
				}
			}

			return true;
		}
		return false;
	}

	function getNewRandomWord() {
		fetch("https://random-word-api.vercel.app/api?words=1")
			.then((response) => response.json())
			.then((data) => {
				setRandomLetter(data[0].split("").map((a) => ({ letter: a.toUpperCase(), guessed: false })));
			});
	}

	function checkLetter(letter) {
		setRandomLetter((prev) => {
			return prev.map((a) => {
				if (a.letter === letter) {
					return {
						...a,
						guessed: true,
					};
				} else {
					return a;
				}
			});
		});

		for (let elem of randomLetter) {
			if (elem.letter === letter) {
				return true;
			}
		}
		return false;
	}

	function removeLang(Languages) {
		for (let i = 0; i < Languages.length; i++) {
			if (!Languages[i].removed) {
				Languages[i].removed = true;
				break;
			}
		}
		return Languages;
	}

	function pickLetter(letter) {
		let matches = checkLetter(letter);
		if (!matches) {
			setLanguages((prev) => removeLang(prev));
		}

		setLetters((prev) => {
			return prev.map((a) => {
				if (a.letter === letter && matches) {
					return {
						...a,
						clicked: true,
						rightLetter: true,
					};
				} else if (a.letter === letter)
					return {
						...a,
						clicked: true,
					};
				else {
					return a;
				}
			});
		});
	}

	return (
		<div className="flex justify-center">
			{gamewon && <Confetti />}
			<div className="w-2xl px-14 py-4">
				<p className="text-center text-white font-medium text-xl">Assembly: Endgame</p>
				<p className="text-center text-white font-medium text-sm px-25">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
				{gamewon ? <GameWon /> : gameover ? <GameOver /> : <FareWell Languages={languages} />}
				<div className="flex justify-center gap-2 flex-wrap pt-9 px-20">
					{languages.map((l) => (
						<Language key={nanoid()} language={l} />
					))}
				</div>
				<div className="flex justify-center gap-1 px-10 pt-9">
					{randomLetter.map((l) => (
						<Guess key={nanoid()} letter={l} />
					))}
				</div>
				<div className="flex justify-center gap-2 flex-wrap pt-18">
					{letters.map((l) => (
						<Letter gameOver={gameover} PickLetter={pickLetter} key={nanoid()} letter={l} />
					))}
				</div>
				{gameover | gamewon ? <NewGame resetGame={resetGame} /> : ""}
			</div>
		</div>
	);
}
export default Main;
