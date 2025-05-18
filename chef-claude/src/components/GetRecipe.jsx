function GetRecipe() {
  return (
    <div className="mb-14 flex flex-col md:flex-row items-center justify-between px-12 lg:px-24 py-8 gap-8 bg-llgray rounded-md">
        <div className="">
            <p className="font-medium text-xl text-deepBlack pb-2">Ready for a recipe?</p>
            <p className="text-lg text-blueish">Generate a recipe from youtr list of Ingredients</p>
        </div>
        <button className="rounded-md text-white bg-btncolor px-4 py-2 h-fit">Get a recipe</button>
    </div>
  )
}
export default GetRecipe