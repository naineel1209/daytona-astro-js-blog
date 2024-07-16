import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
    name: 'default',
    title: 'naineel-blog',

    projectId: "yhmzb4iv",
    dataset: "production",

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
})
