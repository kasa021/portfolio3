// src/app.module.ts
import { Module } from '@nestjs/common';
import { MessageController } from './message/message.controller';
import { BlogController } from './blogs/blog.controller';

@Module({
  imports: [],
  controllers: [MessageController, BlogController],
  providers: [],
})
export class AppModule {}
