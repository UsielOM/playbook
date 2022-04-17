// Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    // Esta es una función que se guarda como propiedad
    sayHello: function() {
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`)
    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
    

//
const pet1 = {

    name: "Coco",
    sayHello: function() {
        console.log(`${this.name} te saluda español `)
    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet1.sayHello()