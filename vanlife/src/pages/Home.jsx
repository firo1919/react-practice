import { Link } from "react-router-dom";

function Home() {
	return (
        <div className="bg-[url('/image54.png')] bg-cover px-7 py-10 text-white bg-no-repeat">
            <p className="font-extrabold text-4xl leading-10 pb-5">You got the travel plans, we got the travel vans.</p>
            <p className="font-medium text-lg pb-5">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className=" bg-deep-saffron text-white font-bold text-sm flex items-center justify-center h-12 w-full rounded-sm">Find your van</Link>
        </div>
    );
}
export default Home;
