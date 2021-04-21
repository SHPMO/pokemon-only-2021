import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  base: process.env.NODE_ENV === "production" ? "/pmo2021/" : "./",
  plugins: [ vue() ]
})
