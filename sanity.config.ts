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

    projectId: "yhmzb4iv",
    dataset: "production",
    token: "sk1aFnPRfVO8jIz7i1AZ8zmrsjyMg0JJnhpEOBBlOlN5ajIyYVvsKc7KEeJd1nb77lCw5uV5lTlvuiA75JzRkcuqfYpvLZ3fPLjgMVDQjmtfDSD7jBYOY2Lkm3ttFhQFVSaWzWBDSnZyiXPYhn9oH9r24MFbdQxYjKJvMgJ14dRgnTpjRGlS",

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});