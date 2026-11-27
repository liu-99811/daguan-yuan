import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 两种产物：
//   pnpm build         -> dist/          常规静态站（GitHub Pages 用这个）
//   pnpm build:single  -> dist-single/   单文件 HTML（双击就能开、可以微信发）
//   单文件模式依赖 vite-plugin-singlefile，未安装时会降级为普通构建。
export default defineConfig(async ({ mode }) => {
  const single = mode === 'single'
  const plugins = [react()]

  if (single) {
    try {
      // @ts-expect-error 可选依赖
      const { viteSingleFile } = await import('vite-plugin-singlefile')
      plugins.push(viteSingleFile())
    } catch {
      console.warn('[build:single] 未安装 vite-plugin-singlefile，按普通模式构建')
    }
  }

  return {
    base: './',
    resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
    plugins,
    build: {
      outDir: single ? 'dist-single' : 'dist',
      emptyOutDir: true,
      assetsInlineLimit: single ? 100_000_000 : 4096,
      chunkSizeWarningLimit: 2000,
    },
  }
})
