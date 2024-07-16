import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: "yhmzb4iv",
    dataset: "production",
    apiVersion: '2022-03-07',
    useCdn: true, //for SSR - true
    studioBasePath: '/admin'
  })],
  output: "server",
  adapter: vercel()
});
