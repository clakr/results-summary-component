import { defineConfig } from "vite";
import pluginPug from "vite-plugin-pug";

import categories from "./public/data.json";

export default defineConfig({
  plugins: [pluginPug({}, { categories })],
});
