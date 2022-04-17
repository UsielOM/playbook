// let a
// var B
// const C


// let mycar = new Object(); //Creacion de un objeto
// mycar.make = 'Ford'; // Guardando un valor dentro del objeto creado
// mycar.model = 'Mustang';
// mycar.year = 1969;
// console.log(mycar);
const biblioteca = require('./logger');



let miPersona = new Object()

miPersona.name = 'Usiel';
miPersona.age = '21';
miPersona.color = 'Verde';

console.log(miPersona);

// Ejemplo 1: Crear un objeto
const paoObjeto = {
    name: "Paola",
    age: 20,
    hobies: [
        "Pintar", "Musica", "Salir"
    ],

    familia: {
        mama: "paogrande",
        papa: "paomacho",
        hermano: "pauchiquitita",

        abuela_HIJOS: [
            "Papa", "CRISTO", "REYNA"
        ],

        primos: {
            primo1: "Kevin"
        }

    },
    mascota: "C3-PO",
    // Esta es una función que se guarda como propiedad
    hola: function() {
        console.log(`${this.mascota} te saluda en español`)
    },
}
console.log(paoObjeto)

paoObjeto.hola()



// const myObjetc = {} // Esto es un objeto vacío
// console.log("Ejemplo 1: Crear un objeto vacío")
// console.log(myObjetc)




// const myObjetUsiel = {}
// console.log("Ejemplo 1: Crear un objeto vacio")
// console.log(myObjetUsiel);

biblioteca.Usiel('Usiel');