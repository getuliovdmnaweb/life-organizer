import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodoModule);
  await app.listen(3000);
}
bootstrap();
