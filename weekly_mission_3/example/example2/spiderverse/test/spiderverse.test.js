const Spidermans = require('./../../spiderverse/app/spiderman')
describe("Test de spiderman", () => {
    test('Case 1 Dummy', () => {

        const andrew = new Spidermans("Spiderman Sony", 31, "Andrew", 3, "Sony")
        expect(andrew.nombre).toBe("Spiderman Sony");
        expect(andrew.edad).toBe(31);
        expect(andrew.actor).toBe("Andrew");
        expect(andrew.nPeliculas).toBe(3);
        expect(andrew.estudioCine).toBe("Sony");


    });

    test("Requerimiento 2: Regresar informacion", () => {

        const tomHolland = new Spidermans("Spiderman Marvel HD", 25, "Tom", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")



    })

})