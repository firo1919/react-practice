import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

function Header() {
	return(
        <div className="h-28 px-6 flex items-center justify-between">
            <Link to="/">
                <img className="h-10 w-28 object-contain" src={logo} alt="logo picture" />
            </Link>

            <nav className="flex gap-4 ">
                <Link className="text-dark-gray font-semibold" to="/about">About</Link>
                <Link className="text-dark-gray font-semibold" to="/vans">Vans</Link>
            </nav>

        </div>
    );
}
export default Header;
