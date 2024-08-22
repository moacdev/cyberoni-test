import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import basicAuth from 'express-basic-auth';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/api-docs',
    basicAuth({
      users: {
        admin: 'A7Sfb3dqMHtgeQhwR6V5yZ'
      },
      challenge: true,
    }),
  );
  
  const config = new DocumentBuilder()
    .setTitle('User and Post REST API')
    .setDescription('API doc🚀')
    .setVersion('1.0')
    .build();

    app.enableCors({
      origin: "*", // For testing ofcourse ^^
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    });

    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '15mb' }));
    app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api-docs', app, document);

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );

  
  await app.listen(8888);
}
bootstrap();
