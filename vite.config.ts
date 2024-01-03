import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //  This is for @components alias
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components/"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages/"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils/"),
      },
    ],
  },
});
