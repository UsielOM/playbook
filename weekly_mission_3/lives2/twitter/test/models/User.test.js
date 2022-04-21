const User = require('./../../app/models/User')

describe("Prueba de jest", () => {
    test("Prueba 1", () => {

        const user = new User(1, "carlogimar", "usiel", "Bio", "datos", "actualziacion")
        expect(user.id).toBe(1)


    })
})