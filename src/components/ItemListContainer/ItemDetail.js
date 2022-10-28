
import Contador from '../Contador/Contador';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';




export const ItemDetail = ( {item}) =>{
    const{addProduct} =useCartContext();
const onAdd = (cantidad) => {
    addProduct(item,cantidad);
}
    return(
        <div className='back'>
            <h2 > {item.nombre}</h2>
            <p> {item.descripcion}</p>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre}/>
            <Contador initial={1} stock={10} onAdd={onAdd}/>
        </div>
            
    )

};

export default ItemDetail;