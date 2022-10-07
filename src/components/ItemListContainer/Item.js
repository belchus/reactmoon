
const Productos =[
  {id: 1,nombre: "Cadenita Way",precio: "$2200",cantidad: 1, imagen: "../img/cadenita1.jpg"},
{id: 2, nombre: "Cadenita Sea ", precio: "$1500 ", cantidad: 1, imagen: "../img/cadenita2.jpg",},
{id: 3,nombre: "Cadenita Tree ",precio: "$1200" ,cantidad: 1, imagen: "../img/cadenita3.webp"},
{id: 4,nombre: "Cadenita Black",precio: "$999",cantidad: 1, imagen: "../img/cadenita4.jpg"},
{id: 5,nombre: "Cadenita Pearls",precio: "$1670",cantidad: 1, imagen: "../img/cadenita5.jpg"},
{id: 6,nombre: "Cadenita Heart",precio:"$2900",cantidad: 1, imagen: "../img/cadenita6.jpg"},
{id: 7,nombre: "Cadenita Rose",precio: "$1900",cantidad: 1, imagen: "../img/cadenita7.jpg"},
{id: 8,nombre: "Cadenita Clam",precio: "$3900",cantidad: 1, imagen: "../img/cadenita8.jpg"},
{id: 9,nombre: "Cadenita Sunflower",precio: "$1000",cantidad: 1, imagen: "../img/cadenita9.jpg"},
];


      const getAllProducts= () => {
        const promise = new Promise((resolve) => {
            setTimeout(()=>
            {
              return resolve(Productos);  
            },2000);
            
        });
        return promise
    };

export default getAllProducts;