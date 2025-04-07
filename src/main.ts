import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Remueve propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // (Opcional) lanza error si vienen propiedades no permitidas
    transform: true,        // Convierte automáticamente los tipos (por ejemplo, strings a numbers)
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
