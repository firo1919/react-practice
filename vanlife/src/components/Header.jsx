import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

function Header() {
 
	return(
        <div className="h-28 px-6 flex items-center justify-between">
            <Link to="/">
                <img className="h-10 w-28 object-contain" src={logo} alt="logo picture" />
            </Link>

            <nav className="flex gap-4 ">
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} to="/host">Host</NavLink>
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} to="/about">About</NavLink>
                <NavLink className={({isActive}) => (isActive ? "font-bold underline text-charcoal-black" : "text-dark-gray font-semibold")} to="/vans">Vans</NavLink>
            </nav>

        </div>
    );
}
export default Header;
