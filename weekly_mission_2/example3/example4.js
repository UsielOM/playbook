// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo() { // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())


class Repositorio {
    constructor(nombre, autor, lenguage, estrellas) {
        this.nombre = nombre
        this.autor = autor
        this.lenguage = lenguage
        this.estrellas = estrellas
    }

    getInformacion() {
        return `Repositorio ${this.nombre} has ${this.autor} autor ${this.estrellas} stars`
    }
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepositorio = new Repositorio("LaunchX", "usielOM", "js", 200)
console.log(myRepositorio.getInformacion())