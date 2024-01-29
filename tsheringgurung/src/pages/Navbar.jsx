import { Link } from "react-router-dom"


import "../style/navbar.css"
import logo from "./pic/logo.png"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav__side">
                <Link to="/"><div>Home</div></Link>
                <Link><div>About</div></Link>
                <Link><div>My Works</div></Link>
                <Link><div>Contact</div></Link>
            </div>
        </div>
    )
}

export default Navbar;
