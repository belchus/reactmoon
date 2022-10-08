
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import getAllProducts from "./Item";

const ItemListContainer = ({greeting})=>{
    const {Id} =useParams();
    const [Productos,setProductos]=useState([]);
    useEffect(()=>{
        console.log(Id)
    },[Id]);
    useEffect(()=>{

            getAllProducts()
            .then((data)=>setProductos(data))
            .catch((error)=>console.warn(error))
        },[Id])
 return(
    <div>
        <h1 className="tituloinicial">
            Todos los Productos
        </h1>
                <ItemList Productos={Productos} />
            
                </div>
            
        )
    }
export default ItemListContainer;