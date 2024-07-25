import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
import { config } from 'dotenv';
config();

console.log(process.env);

export default defineConfig({
    name: 'default',
    title: 'naineel-blog',

    projectId: process.env.SECRET_SANITY_PROJECT_ID as string,
    dataset: process.env.SECRET_SANITY_DATASET as string,
    token: process.env.SECRET_SANITY_TOKEN as string,

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});