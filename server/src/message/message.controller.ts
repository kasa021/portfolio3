import { Body, Controller, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('message')
export class MessageController {
  @Post()
  async relayMessage(
    @Body() body: { name: string; email: string; message: string },
  ): Promise<void> {
    const webhooks = process.env.DISCORD_WEBHOOK_URL;
    const payload = {
      content: `----------\n${body.name}さんからメッセージが届きました\nEmail: ${body.email}\nMessage: ${body.message}\n----------`,
    };

    await axios.post(webhooks, payload);
  }
}
