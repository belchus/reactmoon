import  Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Cards.css';




function Cards( {info} ) {
  return (

      <div  className="cards">
      <Card.Body className="img" >
      <Card.Img variant="top" src={info.imagen} className="Card"/>
      <div className="desc">
        <Card.Title><h3 >{info.nombre}</h3></Card.Title> 
        </div>   
        <div className="desc">
        <Link className="link" to= {`/Item/${info.id}`}> Ver más </Link>
        </div>
      </Card.Body>
      </div>
  );
}

export default Cards;