import * as path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import EnvironmentPlugin from "vite-plugin-environment";
import { viteSingleFile } from "vite-plugin-singlefile";

delete process.env["CommonProgramFiles(x86)"];
delete process.env["ProgramFiles(x86)"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";
  const isAnalyze = mode === "analyze";

  return {
    define: {
      "process.env": {},
    },
    plugins: [
      react(),
      EnvironmentPlugin("all"),
      //  resolve({ "react-codemirror2": `
      //       const UnControlled = {};
      //       export {
      //         UnControlled,
      //       }`
      //   }
      checker({
        typescript: true,
      }),
      viteSingleFile(),
      // lightningcss({
      //   browserslist: '>= 0.25%',
      // }),
    ],
    optimizeDeps: {
      include: ["react"],
    },
    css: {
      devSourcemap: isDev,
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
      sourcemap: isAnalyze,
      outDir: "webview",
      emptyOutDir: false,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    esbuild: {
      sourcemap: isDev,
    },
    server: {
      port: 8000,
    },
    preview: {
      port: 8000,
    },
  };
});
