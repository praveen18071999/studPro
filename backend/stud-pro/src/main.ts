import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const allowedOrigins = [
    "http://localhost:3000",
    "http://167.172.155.139",
    "http://167.172.155.139/",
    "https://167.172.155.139",
    "https://167.172.155.139/",
  ];
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept,Authorization',
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
