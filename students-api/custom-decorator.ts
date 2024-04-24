import { Injectable, SetMetadata } from '@nestjs/common';

// Creamos un decorador personalizado para marcar los endpoints que requieren autenticación
export const Authenticated = () => SetMetadata('authenticated', true);

// Ejemplo de un servicio que utiliza el decorador personalizado
@Injectable()
export class MyService {
  @Authenticated()
  myMethod() {
    // Esta lógica se ejecutará solo si el método tiene el decorador Authenticated
  }
}
