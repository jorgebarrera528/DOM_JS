//Se declara la funcion producto que determinará que producto escogio cliente
function producto(){
   
    switch (opcion) {
       case 1: 
            //alert("Escogiste " + producto1.descripcion);
            carrito.innerHTML = "<h3>" + producto1.descripcion + "</h3>";
            carrito.className = "purple";
            cantidad(); 
            break;
        case 2: 
            //alert("Escogiste " + producto2.descripcion);
            carrito.innerHTML = "<h3>" + producto2.descripcion + "</h3>";
            carrito.className = "purple";
            cantidad();
            break;
        case 3: 
            //alert("Escogiste " + producto3.descripcion);
            carrito.innerHTML = "<h3>" + producto3.descripcion + "</h3>";
            carrito.className = "purple";
            cantidad();
            break;
        case 4: 
            //alert("Escogiste " + producto4.descripcion);
            carrito.innerHTML = "<h3>" + producto4.descripcion + "</h3>";
            carrito.className = "purple";
            cantidad();
            break;
        case 5:  
            //alert("Escogiste " + producto5.descripcion);
            carrito.innerHTML = "<h3>" + producto5.descripcion + "</h3>";
            carrito.className = "purple";
            cantidad();
            break;
        default: 
            //alert("No escogiste producto");
            carrito.innerHTML = "<h3> No escogiste producto </h3>";
            carrito.className = "purple";
            break;
        }
        
}

//Se declara la funcion cantidad que determinará la cantidad de productos a comprar por cliente
function cantidad(){
    let c = parseInt(prompt("Indique la cantidad a comprar"));
    if(opcion === 1){
        p1.innerHTML = "<h3> Escogiste la opción " + opcion + " la cantidad de " + c + " </h3>";
        p1.className = "purple";
    } else if(opcion === 2){
        p1.innerHTML = "<h3> Escogiste la opción " + opcion + " la cantidad de " + c + " </h3>";
        p1.className = "purple";
    } else if(opcion === 3){
        p1.innerHTML = "<h3> Escogiste la opción " + opcion + " la cantidad de " + c + " </h3>";
        p1.className = "purple";
    } else if(opcion === 4) {
        p1.innerHTML = "<h3> Escogiste la opción  " + opcion + " la cantidad de " + c + " </h3>";
        p1.className = "purple";
    } else if(opcion === 5){
        p1.innerHTML = "<h3> Escogiste la opción " + opcion + " la cantidad de " + c + " </h3>";
        p1.className = "purple";
    }

}
//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}


let producto1 = new Producto(1, "Cargador de Celular");
let producto2 = new Producto(2, "Audifono");
let producto3 = new Producto(3, "Smartwatch");
let producto4 = new Producto(4, "Mouse");

const prods = [producto1,producto2,producto3,producto4]; 

let producto5 = new Producto(5, "Teclado");
prods.push(producto5);


let productos = document.getElementById("productos"); 

productos.innerHTML = "<h3>" + producto1.descripcion + "<br>" + producto2.descripcion + "<br>" + producto3.descripcion + "<br>"
+ producto4.descripcion + "<br>" + producto5.descripcion + "</h3>" ;
productos.className = "greenyellow";


let carrito = document.getElementById("p2");
let p1 = document.getElementById("p1");
let opcion= parseInt(prompt("Escoger producto " + producto1.codigo + " " + producto1.descripcion + " - " + producto2.codigo + " " + producto2.descripcion + " - " + producto3.codigo + " " + producto3.descripcion + " - " + producto4.codigo + " " + producto4.descripcion + " - " + producto5.codigo + " " + producto5.descripcion));  
    producto();
