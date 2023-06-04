import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
    	rollupOptions: {
      		output: {
        		manualChunks: {}
      		},
    	},
  	},
};

export default config;