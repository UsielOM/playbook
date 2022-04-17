// logger.js
exports.Usiel = (mensaje) => {

    console.log(`Te saluda:  ${mensaje}`)
}

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {

        console.log(`info:  ${message}`)
    }
    // Esta es una función que se guardara en este módulo como verbose
exports.verBose = (message) => {

    console.log(`verbose: ${message}`)

}



exports.suma = (a, b) => {
    let sum = a + b;
    console.log(`este es la suma: ${sum}`);
}



/*
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
* */