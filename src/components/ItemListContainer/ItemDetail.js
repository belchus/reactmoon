
import Contador from '../Contador/Contador';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';




export const ItemDetail = ( {data}) =>{
    const{addProduct} =useCartContext();
const onAdd = (cantidad) => {
    addProduct(data,cantidad);
}
    return(
        <div className='back'>
            <h2 > {data.nombre}</h2>
            <p> {data.descripcion}</p>
            <img className="ItemDetalle" src={data.imagen} alt={data.nombre}/>
            <p> ${data.precio}</p>
            <Contador initial={1} stock={10} onAdd={onAdd}/>
        </div>
            
    )

};

export default ItemDetail;