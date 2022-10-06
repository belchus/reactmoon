import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const ItemList = ()=>{
    const {CategoryId} =useParams();
    const [Productos,setProductos]=useState([]);
    useEffect(()=>{
        console.log(CategoryId)
    },[CategoryId]);
    useEffect(()=>{

            ItemListContainer()
            .then((data)=>setProductos(data))
            .catch((error)=>console.warn(error))
        },[CategoryId])
}
export default ItemList;