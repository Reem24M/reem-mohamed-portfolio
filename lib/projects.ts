import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const folder = path.join(process.cwd(), 'content/projects');

export function getAllProjects() {
  const files = fs.readdirSync(folder);

  const projects = files.map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(folder, file), 'utf8');
    const { data } = matter(content);
    return { slug, ...data };
  });

  return projects.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export async function getProject(slug: string) {
  const content = fs.readFileSync(path.join(folder, `${slug}.md`), 'utf8');
  const { data, content: body } = matter(content);
  const processed = await remark().use(html).process(body);
  return { slug, ...data, html: processed.toString() };
}