import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            '/api',
            '/teste-front-end/junior/tecnologia/lista-produtos'
          ),
      },
    },
  },
});
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api/produtos': {
//         target: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api\/produtos/, '/produtos.json'),
//       }
//     }
//   }
// })
