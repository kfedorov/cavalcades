import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

/**export default config;**/

export default defineConfig({
  build: {
    rollupOptions: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`
    }
  }
})