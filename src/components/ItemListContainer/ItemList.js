import Cards from "../Cards/Cards";

const ItemList = ( {Productos = []}) => {
    
    return (
       
        Productos.map(Productos => <Cards key={Productos.id} info={Productos}/>)
        
       
);}


export default ItemList;