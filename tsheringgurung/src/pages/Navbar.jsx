import { Link } from "react-router-dom"


import "../style/navbar.css"
import logo from "./pic/logo.png"

function Navbar() {
    return (
        <div className="nav">
            <div >
                <Link><img className="logo" src={logo} alt="logo" /></Link>
            </div>
            <div className="nav__side">
                <Link to="/"><div>Home</div></Link>
                <Link to="/about" ><div>About</div></Link>
                <Link to="/work" ><div>My Works</div></Link>
                <Link to="/contact" ><div>Contact</div></Link>
            </div>
        </div>
    )
}

export default Navbar;
