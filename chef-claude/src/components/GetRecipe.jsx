import { useState } from "react";
import loading from "../assets/images/loading-process-svgrepo-com.svg";

function GetRecipe({ HandleGetRecipe, Recipe, ref }) {
	const [clicked, setClicked] = useState(false);

	function handleClick() {
		setClicked(true);
		HandleGetRecipe();
	}

	return (
		<div className="mb-14 flex flex-col md:flex-row items-center justify-between px-12 lg:px-24 py-8 gap-8 bg-llgray rounded-md">
			<div className="" ref={ref}>
				<p className="font-medium text-xl text-deepBlack pb-2">Ready for a recipe?</p>
				<p className="text-lg text-blueish">Generate a recipe from your list of Ingredients</p>
			</div>
			<button disabled={Recipe.length > 0} onClick={handleClick} className="rounded-md flex text-white bg-btncolor px-4 py-2 h-fit">
				{clicked && Recipe.length == 0 && <img className="mr-3 size-5 animate-spin" src={loading} alt="" />}
				{!(clicked && Recipe.length == 0) ? "Get a recipe" : "Processing"}
			</button>
		</div>
	);
}
export default GetRecipe;       
