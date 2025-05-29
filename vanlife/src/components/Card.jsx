import Badge from "./Badge";

function Card({type, imageUrl, name, price}) {
	return (
        <div className="flex flex-col gap-2">
            <img className="object-contain rounded-md" src={imageUrl} alt="" />
            <div className="flex justify-between">
                <p className="font-semibold text-sm">{name}</p>
                <div className="flex flex-col items-end">
                    <p className="font-semibold text-sm">${price}</p>
                    <p className="text-xs -my-1.5">/day</p>
                </div>
                
            </div>
            <Badge variant={type} className="-my-2"/>
        </div>
    );
}
export default Card;
