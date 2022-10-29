import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "./ItemDetail"
import Producto from "./ItemList";
import './ItemListContainer.css'


const ItemDetailContainer =() => {
const [data, setData] =useState({})
const {Id}= useParams()
console.log(Id)
useEffect(() => {
   const querydb =getFirestore ();
   const queryDoc=doc(querydb,"items","W32dhKKvUCn8qDoCkPqm");
    getDoc(queryDoc)
    .then(res =>setData({id:res.id,...res.data()}))
},[Id])
    return( <div className="descripcion"> <ItemDetail data={data}/></div>
    )
}

export default ItemDetailContainer;