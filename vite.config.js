import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]/**,
	build: {
	    rollupOptions: {
	        entryFileNames: `assets/[name].js`,
	        chunkFileNames: `assets/[name].js`
	    }
  	}**/
};

export default config;