import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
import dotenv from 'dotenv'

export default defineConfig({
    name: 'default',
    title: 'naineel-blog',

    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET,
    token: process.env.VITE_SANITY_TOKEN,

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
})
