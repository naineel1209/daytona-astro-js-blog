import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel";
const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_STUDIO_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  site: 'https://daytona-astro-sanity-blog.vercel.app',
  integrations: [tailwind(), react(), sanity({
    projectId: SANITY_STUDIO_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
    apiVersion: '2022-07-03',
    //for SSR - true
    useCdn: true,
    token: SANITY_STUDIO_TOKEN
  })],
  output: "server",
  adapter: vercel({
    imageService: true,
  })
});