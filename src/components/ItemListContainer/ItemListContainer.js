
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs} from 'firebase/firestore';
import ItemList from "./ItemList";
import getAllProducts from "./Item";


const ItemListContainer = ({greeting})=>{
    const {Id} =useParams();
    const [Productos,setProductos]=useState([]);
   // useEffect(()=>{
     //   console.log(Id)
    // },[Id]);
    useEffect(()=>{
const querydb =getFirestore();
const queryCollection= collection(querydb,"items");
getDocs(queryCollection)
.then(res=>setProductos(res.docs.map(items=>({id: items.id, ...items.data()}))))
           // getAllProducts()
            //.then((data)=>setProductos(data))
            //.catch((error)=>console.warn(error))
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