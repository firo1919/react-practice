import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

function Vans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch("/api/vans")
			.then((response) => response.json())
			.then((data) => (setVans(data.vans)));
	}, []);
	return (
		<div className="px-7 py-10">
			<p className="font-bold text-3xl text-charcoal-black">Explore our van options</p>
            <div className="grid grid-cols-2 gap-8 py-5">
                {vans.map((van) => (
                    <Link key={van.id} to={`/vans/${van.id}`}>
                        <Card type={van.type} imageUrl={van.imageUrl} name={van.name} price={van.price} />
                    </Link>
                ))}
            </div>
		</div>
	);
}
export default Vans;
