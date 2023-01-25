//vite.config.js

import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                onderzoeken: resolve(__dirname, 'onderzoeken.html'),
                archive: resolve(__dirname, 'archive.html'),
                inventaris: resolve(__dirname, 'inventaris.html'),
            }
        }
    }
})