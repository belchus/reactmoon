import { useState, useEffect } from "react";
import Productos from "./Productos";


const ItemListContainer = () => {
const [pulseras, setPulsera] = useState([]);


useEffect(() => {
const getData = new Promise (resolve =>{
    setTimeout(() => {
        resolve (Productos)
    }, 3000)
});
getData.then(res => setData(res));

}, [])


    return(
        <div> Productos
        

        </div>
    )
    }

export default ItemListContainer;