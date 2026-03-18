import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "react-router"],
  },
  plugins: [
    react(),
    federation({
      dts: false,
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-1": "./src/App.tsx",
        "./remote-1-store": "./src/store/index.ts",
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        jotai: { singleton: true },
        "react-router": {
          singleton: true,
          requiredVersion: dependencies["react-router"],
        },
      },
    }),
  ],
  server: {
    port: 3001,
  },
});
