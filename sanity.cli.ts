// sanity.cli.js
import { defineCliConfig } from "sanity/cli";
import { loadEnv } from "vite";

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv("", process.cwd(), "");

export default defineCliConfig({
    api: {
        projectId: SANITY_STUDIO_PROJECT_ID,
        dataset: SANITY_STUDIO_DATASET,
    }
});