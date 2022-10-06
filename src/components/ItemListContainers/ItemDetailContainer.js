import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import Producto from "./ItemList";



const ItemDetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()

useEffect(() => {
    const getData = new Promise (resolve =>{
        setTimeout(() => {
            resolve(Producto)
        }, 3000)
    });

    getData.then(prod => setItem(prod.find((prod)=> prod.id === Number(id))));
},[id])

    return( <div className="text"> <ItemDetail item={item}/> <p>Id: {id}</p> <p>Precio {item.precio}</p> </div>
    )
}

export default ItemDetailContainer;