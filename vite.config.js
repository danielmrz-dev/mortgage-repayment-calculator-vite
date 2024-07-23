import { defineConfig } from "vite";

export default defineConfig({
    base: "./", // Substitua pelo nome do seu repositório no GitHub
    build: {
        outDir: "docs", // Define a pasta de saída como 'docs'
    },
});
