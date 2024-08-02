import { defineField, defineType } from "sanity";

export const codeSnippetType = defineType({
  name: 'codeSnippet',
  title: 'Code Snippet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'What does this code snippet do? What are the intended use cases?',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'code',
      options: {
        darkTheme: 'material',
        withFilename: true,
        theme: 'material',
        language: 'javascript',
        languageAlternatives: [
          {
            title: 'Groq',
            value: 'groq',
            mode: 'javascript',
          },
          {
            title: 'JavaScript',
            value: 'javascript',
            mode: 'javascript',
          },
          {
            title: 'JSX',
            value: 'jsx',
            mode: 'javascript',
          },
          {
            title: 'TypeScript',
            value: 'typescript',
            mode: 'javascript',
          },
          {
            title: 'TSX',
            value: 'tsx',
            mode: 'javascript',
          },
          {
            title: 'PHP',
            value: 'php',
            mode: 'php',
          },
          {
            title: 'SQL',
            value: 'sql',
            mode: 'sql',
          },
          {
            title: 'MySQL',
            value: 'mysql',
            mode: 'sql',
          },
          {
            title: 'JSON',
            value: 'json',
            mode: 'json',
          },
          {
            title: 'Markdown',
            value: 'markdown',
            mode: 'markdown',
          },
          {
            title: 'Java',
            value: 'java',
            mode: 'java',
          },
          {
            title: 'HTML',
            value: 'html',
            mode: 'html',
          },
          {
            title: 'C#',
            value: 'csharp',
            mode: 'csharp',
          },
          {
            title: 'Shell',
            value: 'sh',
            mode: 'shell',
          },
          {
            title: 'CSS',
            value: 'css',
            mode: 'css',
          },
          {
            title: 'SCSS',
            value: 'scss',
            mode: 'css',
          },
          {
            title: 'Sass',
            value: 'sass',
            mode: 'sass',
          },
          {
            title: 'Ruby',
            value: 'ruby',
            mode: 'ruby',
          },
          {
            title: 'Python',
            value: 'python',
            mode: 'python',
          },
          {
            title: 'XML',
            value: 'xml',
            mode: 'xml',
          },
          {
            title: 'YAML',
            value: 'yaml',
            mode: 'yaml',
          },
          {
            title: 'Go',
            value: 'golang',
            mode: 'go',
          },
          {
            title: 'Text',
            value: 'text',
            mode: undefined,
          },
          {
            title: 'Batch',
            value: 'batch',
            mode: undefined,
          },
        ],
      }
    })
  ],
})