import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <span className="logo"><Link to="/">Booking</Link></span>
                <div>
                    <button className="navbarButton"><Link to="/register">Register</Link></button>
                    <button className="navbarButton"><Link to="/login">Login</Link></button>
                </div>
            </div>
        </div>
    )
}