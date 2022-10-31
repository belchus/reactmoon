import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartItem = ( {item}) =>{
    const{removeProduct}=useCartContext();
    return(
        <div className='itemCart'>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre}/>
            <h2 > {item.nombre}</h2>
            <p> Cantidad : {item.cantidad}</p>
            <p> Precio x Unidad: ${item.precio}</p>
            <p> Subtotal: ${item.precio*item.cantidad}</p>
            <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            
        </div>
            
    )

};

export default CartItem