import Contador from '../Contador/Contador';
import { Link } from "react-router-dom";

const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}

const ItemDetail = ( {item}) =>{
    return(
        <div className='fondo'>
            <h2 > {item.nombre}</h2>
            <p> {item.descripcion}</p>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre}/>
            <Contador initial={1} stock={10} onAdd={onAdd}/>
        </div>
            
    )

};

export default ItemDetail;