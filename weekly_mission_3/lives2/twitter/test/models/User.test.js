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

    test("Requerimiento 3: ", () => {

        const user = new User(2, "usix21", "usielOM", "Bio")
        expect(user.getUsername).toBe("usix21")
    })

    test("Requirimiento 4: ", () => {



        const user = new User(2, "usix21", "usielOM", "Bio")
        user.setUsername = "usix31"
        expect(user.username).toBe("usix31")
    })
})