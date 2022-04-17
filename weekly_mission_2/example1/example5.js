// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio")

// 

let myPet2 = {
    name: "Lizo",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet2.sayHelloToMyPet("Coco")