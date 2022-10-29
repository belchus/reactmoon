const Productos =[
    {id: 1,nombre: "Cadenita Way",precio: "$2200",cantidad: 1, imagen: "https://i.postimg.cc/htJ6y22D/cadenita1.jpg",descripcion:"Dije de brujula bañada en oro"},
  {id: 2, nombre: "Cadenita Sea ", precio: "$1500 ", cantidad: 1, imagen: "https://i.postimg.cc/wTMGMW8X/cadenita2.jpg",descripcion:"Dije de brujula bañada en oro"},
  {id: 3,nombre: "Cadenita Tree ",precio: "$1200" ,cantidad: 1, imagen: "https://i.postimg.cc/wx0r9CPx/cadenita3.jpg",descripcion:"Dije de brujula bañada en oro"},
  {id: 4,nombre: "Cadenita Black",precio: "$999",cantidad: 1, imagen: "https://i.postimg.cc/2yc9TWvL/cadenita4.webp",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  {id: 5,nombre: "Cadenita Pearls",precio: "$1670",cantidad: 1, imagen: "https://i.postimg.cc/bJP5vppr/cadenita5.webp",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  {id: 6,nombre: "Cadenita Heart",precio:"$2900",cantidad: 1, imagen: "https://i.postimg.cc/W37HFC1n/cadenita6.jpg",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  {id: 7,nombre: "Cadenita Rose",precio: "$1900",cantidad: 1, imagen: "https://i.postimg.cc/25hJmVpg/cadenita7.jpg",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  {id: 8,nombre: "Cadenita Clam",precio: "$3900",cantidad: 1, imagen: "https://i.postimg.cc/cLVjVfzQ/cadenita8.jpg",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  {id: 9,nombre: "Cadenita Sunflower",precio: "$1000",cantidad: 1, imagen: "https://i.postimg.cc/cC45QhKN/cadenita9.jpg",descripcion:"Dije de brujula bañada en oro",category:"Cadenita"},
  
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


