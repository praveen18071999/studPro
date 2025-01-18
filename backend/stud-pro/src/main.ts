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
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Headers',
      'Access-Control-Request-Method',
      'Access-Control-Request-Headers'
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
