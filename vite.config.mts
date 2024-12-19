import { defineConfig } from "vite";

export default defineConfig({
    plugins: [],
    build: {
        sourcemap: true,
        rollupOptions: {
            external: ["tslib"],
        },
        chunkSizeWarningLimit: 600,
    },
    define: {
        'process.env': {},
    },
    envPrefix: 'VITE_',
})