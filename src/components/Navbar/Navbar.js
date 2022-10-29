import "./components.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/Home"}>Home</Link>
    </li>
    <li className="navbar">
    <Link to={"/ItemListContainer"}>Productos</Link>
    <ul className="submenu">
    <li>
    <Link to={"/ItemListContainer"}>Cadenitas</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer"}>Aros</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer"}>Pulseras</Link>
    </li>
    </ul>
    </li>
    <li>
    <a href="#">Contacto</a>
    </li>
    <li className="Cart">
    <Link to={"/Cart"}><CartWidget/></Link>
    </li>
</ul>
    
    </div>)
}

export default Navbar
