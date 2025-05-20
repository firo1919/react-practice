import Form from "./Form";
import Recipes from "./Recipes";
import Ingredients from "./Ingredients";
import GetRecipe from "./GetRecipe";
import { useState } from "react";
import { getRecipeFromMistral } from '../ai.js'


function MainContent() {
	const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState("")

	function handleSumbit(formData) {
		const newIngredient = formData.get("ingredient");
		if (newIngredient !== "") {
			setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		}
	}

    async function getRecipes(){
        const airecipes = await getRecipeFromMistral(ingredients)
        setRecipes(airecipes)
    }

	return (
		<div className="h-full px-12 py-18 lg:px-36">
			<Form handleSubmit={handleSumbit} />
			{ingredients.length > 0 && <Ingredients ingredients={ingredients} />}
            {ingredients.length >= 4 && <GetRecipe Recipe={recipes} HandleGetRecipe={getRecipes}/>}
            
			{recipes.length > 0 && <Recipes Recipes={recipes}/>}
		</div>
	);
}
export default MainContent;
