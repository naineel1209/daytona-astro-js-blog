import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
import { config } from 'dotenv';
config();

// Debugging to check if environment variables are loaded
console.log('Sanity Project ID:', process.env.SECRET_SANITY_PROJECT_ID);
console.log('Sanity Dataset:', process.env.SECRET_SANITY_DATASET);
console.log('Sanity Token:', process.env.SECRET_SANITY_TOKEN);

export default defineConfig({
    name: 'default',
    title: 'naineel-blog',

    projectId: "",
    dataset: process.env.SECRET_SANITY_DATASET as string,
    token: process.env.SECRET_SANITY_TOKEN as string,

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});