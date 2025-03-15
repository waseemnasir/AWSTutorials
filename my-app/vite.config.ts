// /// <reference types='vite/client' />

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(),],
//   base: '/my-app',
//   server: {
//     host: true,
//     port: 8081,
//   },
// })


/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: [
      'd1fj35d2dojc1a.cloudfront.net'
    ]
  },
})
