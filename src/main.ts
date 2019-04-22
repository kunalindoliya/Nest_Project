import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Page } from './page/page.entity';
import { Section } from './section/section.entity';
import { Express } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
