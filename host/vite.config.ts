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
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
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
    port: 3000,
  },
});
