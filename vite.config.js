import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base:"/vite-project/",
  plugins: [
    react({
      bable1:{
        plugins:[['bable-plugin-react-compiler']],
      },
    })
  ],
})
