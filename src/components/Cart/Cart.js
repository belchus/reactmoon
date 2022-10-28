import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = ( {item}) =>{
    const{cart,totalPrice}=useCartContext();
    if(cart.length===0){
        return(
            <>
            <p>El carrito esta vacio</p>
            <Link to="/">Ir a La tienda</Link>
            </>
        );
    }
    return(
        <div>Cart</div>
            
    )

};

export default Cart