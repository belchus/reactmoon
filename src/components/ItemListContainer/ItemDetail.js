const ItemDetail = ( {item}) =>{
    return(
        <div className='fondo'>
            <p className='text'> Informacion sobre : {item.nombre}</p>
            <img className="ItemDetalle" src={item.imgSrc} alt={item.nombre}/>
        </div>
    )
};

export default ItemDetail;