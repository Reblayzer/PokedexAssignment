import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <Link to="/" className="navbar-container_link">
                Pokédex
            </Link>
            <Link to="/about" className="navbar-container_link">
                About
            </Link>
        </nav>
    );
}