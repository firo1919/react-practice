import Form from "./Form";
import Recipes from "./Recipes";
import Ingredients from "./Ingredients";
import GetRecipe from "./GetRecipe";
import { useRef, useState } from "react";
import { getRecipeFromGemini } from '../ai.js'
import { useEffect } from "react";


function MainContent() {
	const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState("")
    const recipeRef  = useRef(null)

	function handleSumbit(formData) {
		const newIngredient = formData.get("ingredient");
		if (newIngredient !== "") {
			setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		}
	}

    async function getRecipes(){
        const airecipes = await getRecipeFromGemini(ingredients)
        setRecipes(airecipes)
    }

    useEffect(()=>{
        if (recipes !== "" && recipeRef.current !== null){
            recipeRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipes])
	return (
		<div className="h-full px-12 py-18 lg:px-36">
			<Form handleSubmit={handleSumbit} />
			{ingredients.length > 0 && <Ingredients ingredients={ingredients} />}
            {ingredients.length >= 4 && <GetRecipe ref={recipeRef} Recipe={recipes} HandleGetRecipe={getRecipes}/>}
            
			{recipes.length > 0 && <Recipes Recipes={recipes}/>}
		</div>
	);
}
export default MainContent;
