class pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello() {

        console.log('Mi pokemon te saluda!!!' + this.name);

    }
    sayMessage(message) {

        console.log('Mi pokemon ' + this.name + ' dice: ' + message);
    }


}
module.exports = pokemon;