
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
import ItemList from "./ItemList";
import getAllProducts from "./Item";


const ItemListContainer = ({greeting})=>{
    const {DetalleId} =useParams();
    const [Productos,setProductos]=useState([]);
   // useEffect(()=>{
     //   console.log(Id)
    // },[Id]);
    useEffect(()=>{
const querydb =getFirestore();
const queryCollection= collection(querydb,"items");
if (DetalleId){
const queryFilter=query(queryCollection,where("categoria","==",DetalleId))
getDocs(queryFilter)
.then(res=>setProductos(res.docs.map(items=>({id: items.id, ...items.data()}))))
}else{
    getDocs(queryCollection)
.then(res=>setProductos(res.docs.map(items=>({id: items.id, ...items.data()}))))}
        },[DetalleId])
    
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