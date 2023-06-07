import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';
import * as fs from 'fs';

interface BlogListItem {
  slug: string;
  title: string;
}

const getTitleFromMarkdown = (markdown: string): string => {
  const titleRegex = /^#\s(.*)$/gm;
  const titleMatch = titleRegex.exec(markdown);

  if (titleMatch === null) {
    return '';
  }

  return titleMatch[1];
};

@Controller('api/blog')
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

      const blogListItems: BlogListItem[] = markdownFiles.map((file) => {
        const markdown = fs.readFileSync(join(directoryPath, file), 'utf8');

        return {
          slug: file.replace('.md', ''),
          title: getTitleFromMarkdown(markdown),
        };
      });

      return res.send(blogListItems);
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
