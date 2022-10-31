import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore';

import ItemDetail from "./ItemDetail"
import Producto from "./ItemList";
import './ItemListContainer.css'


const ItemDetailContainer = () => {
const [data, setData] = useState({})
const { Id } = useParams()
console.log(Id)

const getData = async () => {
const db = getFirestore();
const items = collection(db, "items/");
const docsSnap = await getDocs(items);
docsSnap.forEach((doc) => {
if (doc.data().id == Id) {
setData({ ...doc.data(), data })
}
})
}

useEffect(() => {
getData()
}, [Id])
return (
<div >
{ Id > 35
      ?
    (<div>Lo siento el accesorio que busca no existe</div>):
<div className="descripcion"> <ItemDetail data={data} /></div>
}
</div>
)}


export default ItemDetailContainer;