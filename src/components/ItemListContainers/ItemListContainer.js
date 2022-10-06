
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import getAllProducts from "./Item";

const ItemListContainer = ({greeting})=>{
    const {CategoryId} =useParams();
    const [Productos,setProductos]=useState([]);
    useEffect(()=>{
        console.log(CategoryId)
    },[CategoryId]);
    useEffect(()=>{

            getAllProducts()
            .then((data)=>setProductos(data))
            .catch((error)=>console.warn(error))
        },[CategoryId])
 return(
    <div>
        <h1>
            Todos los Productos
        </h1>
                <ItemList Productos={Productos} />
            
                </div>
            
        )
    }
export default ItemListContainer;