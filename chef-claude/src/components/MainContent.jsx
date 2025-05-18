import Form from "./Form"
import Recipes from "./Recipes"
import Ingredients from "./Ingredients"
import GetRecipe from "./GetRecipe"

function MainContent() {
  return (
    <div className="bg-lightGray font-inter px-12 py-18 lg:px-36">
        <Form />
        <Ingredients />
        <GetRecipe />
        {/* <Recipes /> */}
    </div>
  )
}
export default MainContent