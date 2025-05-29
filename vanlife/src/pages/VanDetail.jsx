import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";

function VanDetail() {
	const params = useParams();
	const [van, setVan] = useState(null);

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then((response) => response.json())
			.then((data) => setVan(data.vans));
	}, [params.id]);
	return (
		<div className="px-7 py-10">
			{van ? (
				<div className="">
					<img className="object-cover rounded-md w-auto h-lg mb-10" src={van.imageUrl} alt="" />
					<Badge variant={van.type} />
                    <p className="font-semibold text-xl my-2">{van.name}</p>
                    <p className="font-semibold text-sm mb-2">${van.price}<span className="text-xs">/day</span></p>
                    <p className="mb-4">{van.description}</p>
                    <Button>Rent this van</Button>

				</div>
			) : (
				<h2>Loading ...</h2>
			)}
		</div>
	);
}
export default VanDetail;
