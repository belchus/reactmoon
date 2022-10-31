/*import React,{useState} from "react"
import { addDoc, collection, getFirestore , serverTimestamp } from "firebase/firestore";
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const defaultForm = { name: "", email: "", message: "" };
const ContactForm = () => {
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState('');
    const{Cart,totalPrice,cleanCart}= useCartContext()
    
    const changeHandler = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    };
    const  handleClick =()=>{
        const db =getFirestore();
        const orderCollection =collection(db,"pedidos");
        addDoc(orderCollection,{
            form,
            items: Cart,
            total: totalPrice(),
            date: serverTimestamp()
        })
        .then( (snapshot) => {
            setId(snapshot.id);
            cleanCart()  });
    
    }
        
return(
    <div>
    <form onSubmit={handleClick}>
    <div>
        <label htmlFor="name" className="letter">Nombre</label>
        <input
        name="name"
        id="name"
        value={form.name}
        onChange={changeHandler}
        />
    </div>
    <div>
        <label htmlFor="email" className="letter">Email</label>
        <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={changeHandler}
        />
    </div>
    <div>
        <label htmlFor="metodo de pago" className="letter">Ingrese su metodo de pago</label>
        <textarea
        name="message"
        id="message"
        value={form.message}
        onChange={changeHandler}
        ></textarea>
    </div>
    <button onClick={handleClick}>Terminar Compra</button>
    <Link to="/"><button><h4>Volver al inicio</h4></button></Link>
    </form>


</div>

)};



export default ContactForm;
*/
import { getFirestore,addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const defaultForm = { name: "", email: "", message: "" };

const ContactForm = () => {
const [form, setForm] = useState(defaultForm);
const [id, setId] = useState('');
const{Cart,totalPrice,clearCart}= useCartContext()

const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
};

const submitHandler = (ev) => {
    ev.preventDefault();
    const db =getFirestore();
    const ordersCollection = collection(db, "mispedidos");
    addDoc(ordersCollection,{
        form,
        items: Cart,
        total: totalPrice(),
        date: serverTimestamp()
    }).then((snapshot) => {
    setId(snapshot.id);
    clearCart()
    });
};

return (
    <div>
    {id ? (
        <div>
    Muchas gracias por su compra, su numero de compra es: 
       {id}
        
        </div>
    ) : (
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="name" className="letter">Nombre</label>
            <input
            name="name"
            id="name"
            value={form.name}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="email" className="letter">Email</label>
            <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="email2" className="letter">Confirmar Email</label>
            <input
            type="email"
            name="email"
            id="email2"
            value={form.email}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="message" className="letter">Ingrese su metodo de pago</label>
            <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={changeHandler}
            ></textarea>
        </div>
        <button><h4>Enviar</h4></button>
        <Link to="/"><button><h4>Volver al inicio</h4></button></Link>
        </form>
        
    )}
    </div>
    
)};


export default ContactForm;