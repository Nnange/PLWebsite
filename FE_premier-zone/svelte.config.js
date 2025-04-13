import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ out: "build"}),
		paths: {
			// base: ""
		},
		alias: {
			'$components': './src/components',
			'$lib': './src/lib',
			'$stores': './src/stores',
			'$interfaces': './src/interfaces',
			'$utils': './src/utils',
			'$service': './src/service'
		}
	}
};

export default config;
