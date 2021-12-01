import { defineConfig } from "vite";
import { readFile } from "fs/promises";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-formily-hack",
      async load(id: string) {
        if (id.includes("@formily/react") && id.includes("ReactiveField.js")) {
          const code = await readFile(id, "utf-8");

          return code.replace(/finalComponent/g, "FinalComponent");
        }

        return null;
      },
    },
  ],
  resolve: {
    alias: [
      // https://github.com/vitejs/vite/issues/2185
      { find: /^~/, replacement: "" },
    ],
  },
  // antd less 用法特殊
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    minify: false,
  },
});
