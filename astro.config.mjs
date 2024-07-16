import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2022-07-03',
    useCdn: true, //for SSR - true
    studioBasePath: '/admin',
    token: import.meta.env.VITE_SANITY_TOKEN,
  })],
  output: "server",
  adapter: vercel()
});
