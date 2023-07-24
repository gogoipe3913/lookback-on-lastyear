import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //相対パスでビルドする
  root: "./src", //開発ディレクトリ設定
  plugins: [react()],
});
