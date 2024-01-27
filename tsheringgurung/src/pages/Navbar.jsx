import "../style/navbar.css"
import logo from "./pic/logo.png"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav__side">
                <div>Home</div>
                <div>About</div>
                <div>My Works</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Navbar;
