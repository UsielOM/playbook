const User = require('./../../app/models/User')

describe("Prueba de jest", () => {
    test("Requerimiento 1: Creacion de User", () => {

        const user = new User(1, "usix", "usiel", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("usix")


    })

    test("Requerimiento 2: Fechas en atributos de User", () => {

        const user = new User(2, "usix21", "usielOM", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})