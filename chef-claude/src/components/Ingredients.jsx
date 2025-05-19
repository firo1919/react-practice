function Ingredients({ ingredients }) {
	return (
		<div className="mb-14">
			<h1 className="font-semibold text-3xl pb-8">Ingredients on hand</h1>
			<ul className="text-xl text-lighterGray list-disc list-inside">
				{ingredients.map((a) => (
					<li className="pb-5">{a}</li>
				))}
			</ul>
		</div>
	);
}
export default Ingredients;
