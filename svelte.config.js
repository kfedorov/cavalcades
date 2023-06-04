import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: false
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: false
		},
		browser: {
			router: false,
			hydrate: true
		}
	}
};

export default config;
