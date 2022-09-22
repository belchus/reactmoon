import "./navbar.css"
import CartWidget from "./cartwidget.js";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
      Inicio
    </li>
    <li>
      Productos
    </li>
    <li>
      Contacto
    </li>
    <li className="Cart">
    <CartWidget/>
    </li>
</ul>
    
    </div>)
}

export default Navbar
