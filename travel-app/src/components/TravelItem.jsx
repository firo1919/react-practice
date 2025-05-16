import location from "../assets/images/location.svg";

function TravelItem({ Travel }) {
    return (
        <div className="flex gap-8 items-center">
            <div className="h-88 w-64">
                <img className="w-full h-full rounded-md" src={Travel.img.src} alt={Travel.img.alt} />
            </div>
            <div className="flex-3/4">
                <div className="flex gap-2 items-center">
                    <img src={location} alt="location image" />
                    <p className="text-lg font-light">{Travel.country.toUpperCase()}</p>
                    <a className="text-grayish font-light underline underline-offset-4" href={Travel.googleMapsLink}>View on Google Maps</a>
                </div>

                <p className="font-bold text-6xl pb-8">{Travel.title}</p>
                <p className="font-bold pb-3">{Travel.dates}</p>
                <p className="">{Travel.text}</p>
            </div>
        </div>
    );
}
export default TravelItem;
