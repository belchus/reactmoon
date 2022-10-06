import React from "react";
import { Link } from "react-router-dom";


function Cards( {info} ) {
  return (

      <div >
      
     {info.imagen} 
      <h3>{info.nombre}</h3>   
        <div>
        <Link to= {`/Detail/${info.id}`}> Ver más </Link>
        </div>

      </div>
  );
}

export default Cards;