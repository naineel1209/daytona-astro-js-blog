// sanity.cli.js
import { defineCliConfig } from "sanity/cli";
import { loadEnv } from "vite";
const { SECRET_SANITY_PROJECT_ID, SECRET_SANITY_DATASET } = loadEnv("", process.cwd(), "");

export default defineCliConfig({
    api: {
        projectId: "yhmzb4iv",
        dataset: "production",
    }
});