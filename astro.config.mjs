import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
const { SECRET_SANITY_TOKEN, SECRET_SANITY_PROJECT_ID, SECRET_SANITY_DATASET } = loadEnv(process.env.NODE_ENV
  , process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: process.env.SECRET_SANITY_PROJECT_ID || SECRET_SANITY_PROJECT_ID,
    dataset: process.env.SECRET_SANITY_DATASET || SECRET_SANITY_DATASET,
    apiVersion: '2022-07-03',
    useCdn: true, //for SSR - true
    studioBasePath: '/admin',
    token: process.env.SECRET_SANITY_DATASET || SECRET_SANITY_TOKEN,
  })],
  output: "server",
  adapter: vercel()
});
