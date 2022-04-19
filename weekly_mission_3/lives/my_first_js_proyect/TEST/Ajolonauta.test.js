const Ajolonauta = require('./../app/Ajolonauta.js')
describe("Esto es una prueba", () => {

    test('Caso de prueba', () => {

        const woopa = new Ajolonauta("Woopa")

        expect(woopa.name).toBe("Woopa")
    })

});