import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import * as dns from "dns";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "campaigns",
      filename: "campaigns.js",
      exposes: {
        "./CampaignList": "./src/pages/campaigns/list.tsx",
        "./CampaignShow": "./src/pages/campaigns/show.tsx",
        "./CampaignEdit": "./src/pages/campaigns/edit.tsx",
        "./CampaignCreate": "./src/pages/campaigns/create.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@refinedev/core",
        "casbin",
        "@refinedev/mui",
        "@refinedev/react-hook-form",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
        "@mui/icons-material",
      ],
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 4003,
  },
  preview: {
    host: "localhost",
    port: 4003,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
