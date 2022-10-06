import "./components.css"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/Home"}>Home</Link>
    </li>
    <li>
    <Link to={"/ItemList"}>Productos</Link>
    </li>
    <li>
    <a href="">Contacto</a>
    </li>
    <li className="Cart">
    <a href="#"><CartWidget/></a>
    </li>
</ul>
    
    </div>)
}

export default Navbar
