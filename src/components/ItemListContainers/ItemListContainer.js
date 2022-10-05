import { useState, useEffect } from "react";
import Productos from "./Productos";


const ItemListContainer = () => {
const [pulsera, setPulsera] = useState([]);


useEffect(() => {
const pulseras = new Promise (resolve =>{
    setTimeout(() => {
        resolve (Productos)
    }, 3000)
});
pulseras.then(res => setPulsera(res));

}, [])


    return(
        <div> Productos
        

        </div>
    )
    }

export default ItemListContainer;