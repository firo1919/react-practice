function Form() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mb-14">
        <input className="border-gray-300 border flex-3/4 h-10 px-3 py-2 rounded-md bg-white" type="text" name="" id="" placeholder="e.g. oregano" />
        <button className="flex-1/4 h-10 px-4 py-2 rounded-md bg-deepBlack text-white">+ Add ingredient</button>
    </div>
  )
}
export default Form