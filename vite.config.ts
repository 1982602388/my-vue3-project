import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json','.vue']
  },
  plugins: [uni()],
});
