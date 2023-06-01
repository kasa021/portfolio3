import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('blog')
export class BlogController {
  @Get()
  getMarkdownFiles(@Res() res: Response) {
    const directoryPath = join(__dirname, '..', '..', 'static', 'blogs');

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return res.status(500).send('Internal Server Error');
      }

      const markdownFiles = files.filter((file) => file.endsWith('.md'));

      return res.json(markdownFiles);
    });
  }

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

    fs.readFile(mdFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(404).send('File Not Found');
      }

      return res.send(data);
    });
  }
}
