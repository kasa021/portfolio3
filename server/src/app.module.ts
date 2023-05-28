// src/app.module.ts
import { Module } from '@nestjs/common';
import { MessageController } from './message/message.controller';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [],
})
export class AppModule {}
