const Pokemeon = require("./../app/Pokemon")
describe("Esto es una prueba", () => {

    test('Caso de prueba', () => {

        const pokemon = new Pokemeon("Pikachu")

        expect(pokemon.name).toBe("Pikachu")
    })

});