// 1. Creación de un objeto con propiedades

let mycar = new Object(); //Creacion de un objeto
mycar.make = 'Ford'; // Guardando un valor dentro del objeto creado
mycar.model = 'Mustang';
mycar.year = 1969;
console.log(mycar);


const myModule = (() => {

    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto ";
    const privateBar = [1, 2, 3, 4];
    const baz = "Soy un valor que va a ser expuesto";

    // Variable para guardar las variables locales
    const exported = {
            publicoFoo: "Valor público, pueden verme desde donde me llamen",
            publicBar: "Otro valor publico",
            publicBaz: baz

        }
        // Exposición de variables locales
    return exported;



})()

console.log(myModule);