const Superhero = require("./../app/Superhero")

describe("Unit Test for Superhero", () => {
    test('Caso de prueba', () => {

        const ironman = new Superhero("Iron Man", "Tony Stark", "Robert Downey Jr.")

        expect(ironman.name).toBe("Iron Man")

        expect(ironman.heroName).toBe("Tony Stark")

        expect(ironman.actor).toBe("Robert Downey Jr.")


    });
})