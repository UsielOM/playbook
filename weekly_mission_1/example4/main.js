// Clases y Objetos
const Logger = require('./logger'); // Invocas el módulo que contiene la clase
// Creación de un objeto

const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase

dbLogger.info('Este es la informacion del mensaje ');

const accessLogger = new Logger('ACCESS');
// Creación de otro objeto
accessLogger.verbose('Este es el mensaje de verbose')