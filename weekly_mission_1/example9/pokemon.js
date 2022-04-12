export default class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayHello() {

        console.log('Mi pokemon te saluda!!!' + this.name);

    }
}