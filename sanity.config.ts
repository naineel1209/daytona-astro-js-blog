import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemaTypes'

// @ts-ignore
const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_STUDIO_TOKEN } = (import.meta as any).env;

console.log('Sanity Studio Project ID:', SANITY_STUDIO_PROJECT_ID);
console.log('Sanity Studio Dataset:', SANITY_STUDIO_DATASET);
export default defineConfig({
    name: 'default',
    title: 'astro-sanity-studio',

    projectId: SANITY_STUDIO_PROJECT_ID as string,
    dataset: SANITY_STUDIO_DATASET as string,
    token: SANITY_STUDIO_TOKEN as string,

    plugins: [structureTool(), visionTool(), markdownSchema(), codeInput()],

    schema: {
        types: schemaTypes,
    },
});