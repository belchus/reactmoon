import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import getAllProducts from "../ItemListContainer/Item";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartItem from "./CartItem";

const Cart = ( {}) =>{
    const{Cart,totalPrice}=useCartContext();
    const order ={
        items:Cart.map(items=>({id:items.id,nombre:items.nombre,precio:items.precio,cantidad:items.cantidad})),
        total:totalPrice(),
    }

    if(Cart.length===0){
        return(
            <>
            <p>El carrito esta vacio</p>
            <Link to="/"><button>Ir a La tienda</button></Link>
            </>
        );
    }
    return(
        <>
        {
            Cart.map(item=> <CartItem key={item.id} item={item}/>)
        }
        <p>Total:{totalPrice()}</p>
        <Link to="/Checkout"><button>Terminar Compra</button></Link>
        </>
    )

};

export default Cart;