/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription(
      'API REST pour gérer des tâches - TP Final Web Services & REST API créée par NGUETCHEU KUINSI Dominique M2 LFD École PMN',
    )
    .setContact('NGUETCHEU KUINSI Dominique', '', 'dnguetcheu@gmail.com')
    .setVersion('1.0')
    .addTag('tasks')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'api-auth-token',
        in: 'header',
      },
      'api-auth-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT as unknown as number);

  console.log(
    `Documentation Swagger disponible sur http://localhost:${process.env.PORT}/docs`,
  );
}
bootstrap();
