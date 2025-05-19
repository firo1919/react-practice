function Form({handleSubmit}) {
  return (
    <form action={handleSubmit}  className="flex flex-col sm:flex-row gap-8 mb-14">
        <input name="ingredient" className="border-gray-300 border flex-3/4 h-10 px-3 py-2 rounded-md bg-white" type="text" placeholder="e.g. oregano" />
        <button className="text-sm md:text-xs lg:text-sm flex-1/4 h-10 px-4 py-2 rounded-md bg-deepBlack text-white">+ Add ingredient</button>
    </form>
  )
}
export default Form