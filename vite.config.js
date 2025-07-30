import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Maina-and-Kids-Children-Foundation/",
    server: {
        port: 5100,
    },
});
