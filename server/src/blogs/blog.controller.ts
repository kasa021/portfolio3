import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('blog')
export class BlogController {
  @Get(':filename')
  getMarkdownContent(
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const mdFilePath = join(
      __dirname,
      '..',
      '..',
      'static',
      'blogs',
      `${filename}.md`,
    );
    res.sendFile(mdFilePath);
  }
}
