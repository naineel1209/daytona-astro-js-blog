import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
const {
  SECRET_SANITY_TOKEN,
  SECRET_SANITY_PROJECT_ID,
  SECRET_SANITY_DATASET
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

console.log("====================================");
console.log(SECRET_SANITY_TOKEN, SECRET_SANITY_PROJECT_ID, SECRET_SANITY_DATASET);
console.log("====================================");


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId: SECRET_SANITY_PROJECT_ID,
    dataset: SECRET_SANITY_DATASET,
    apiVersion: '2022-07-03',
    //for SSR - true
    useCdn: true,
    token: SECRET_SANITY_TOKEN
  })],
  output: "server",
  adapter: vercel({
    imageService: true,
  })
});