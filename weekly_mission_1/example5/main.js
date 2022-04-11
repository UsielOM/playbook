const logger = require('./logger');
// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('Este es el mensaje de infomacion')


// También pueder instanciar uno nuevo de esta manera:


const customLogger = new logger.constructor('INFO');
customLogger.log('Este es la informacion ')