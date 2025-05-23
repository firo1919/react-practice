import lost from "../assets/images/lost.png";

function Language({ language }) {
	return (
		<div className={`font-bold h-10 p-2 rounded-sm text-white relative`} style={{ backgroundColor: language.color }}>
			{language.name}
			{language.removed && (
				<div className="h-10 rounded-sm absolute top-0 left-0 bg-black opacity-50 w-full flex items-center justify-center">
					<img className="w-5, h-5" src={lost} alt="" />
				</div>
			)}
		</div>
	);
}
export default Language;
