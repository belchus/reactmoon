import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = ( {}) =>{
    const{Cart,totalPrice}=useCartContext();
    if(Cart.length===0){
        return(
            <>
            <p>El carrito esta vacio</p>
            <Link to="/">Ir a La tienda</Link>
            </>
        );
    }
    return(
        <>
        {
            Cart.map(item=> <CartItem key={item.id} item={item}/>)
        }
        </>
    )

};

export default Cart;