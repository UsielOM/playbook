class Logger {
    constructor(name) {
        // Al crear este objeto se guardarán estos valores
        this.name = name;
        this.count = 0;

    }

    log(message) {
        this.count++; // se aumenta el contador interno al llamar este método
        console.log('[' + this.name + ']' + message + this.count);
    }
}



module.exports = new Logger('DEFAULT');