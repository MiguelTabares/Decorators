import { Logger } from '@nestjs/common';

// 1. Definir la función del decorador
function CustomLogger(prefix: string): ClassDecorator{
    // 2. Retornar la función que se será utilizada como el decorador
    return (target:) => {
    // 3. Guardar una referencia al constructor original de la clase
    const original = target;

    //4. Sobreescribir el constructor original de la clase
    function newConstructor(...args){
        // 5. Instanciar la clase original con los argumentos dados
        const instance = new original(...args);

        // 6. Obtener una instancia de Logger de NestJS
        const logger = new Logger();

        // 7. Sobrescribir el método log del Logger para añadir el prefijo
        const originalLog = logger.log.bind(logger);
        logger.log = (message: string) => {
            originalLog(`[${prefix}] ${message}`);
        }

        // 8. Asignar el nuevo Logger modificado a la instancia
        instance.logger = logger;

        // 9. Devolver la instancia modificada
        return instance;
    }

    // 10. Establecer el prototipo de la nueva clase para que sea el mismo que el original
    newConstructor.prototype = original.prototype;

    // 11. Devolver la nueva clase modificada
    return newConstructor;
    }
}