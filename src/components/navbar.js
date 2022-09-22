import "./components.css"
import CartWidget from "./CartWidget.js";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <a href="#">Inicio</a>
    </li>
    <li>
    <a href="#">Productos</a>
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
