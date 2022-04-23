class Spiderman {
    constructor(nombre, edad, actor, nPeliculas, estudioCine) {
        this.nombre = nombre
        this.edad = edad
        this.actor = actor
        this.nPeliculas = nPeliculas
        this.estudioCine = estudioCine
    }

    getInfo() {
        return ("Hey, I'm Tom Holland from Marvel studio");
    }
}

module.exports = Spiderman