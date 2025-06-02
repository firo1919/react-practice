import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function HostLayout() {
	return (
        <>
            <nav className="flex gap-4 ">
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} end to="/host">Dashboard</NavLink>
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} end to="/host/reviews">Reviews</NavLink>
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} end to="/host/income">Income</NavLink>
            </nav>
            <Outlet />
        </>
    );
}
export default HostLayout;
