import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { base } from "./src/data/basename";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: base.basename,
    server: {
        port: 5100,
    },
});
