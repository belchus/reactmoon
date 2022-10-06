
import Productos from "./Productos";

const ItemListContainer= () => {
    const promise = new Promise((resolve) => {
        setTimeout(()=>
        {
          return resolve(Productos);  
        },2000);
        
    });
    return promise
};
export default ItemListContainer;