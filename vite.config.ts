import { defineConfig, UserConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import path from 'path';


const production = process.env.NODE_ENV === 'production';
const config = <UserConfig> defineConfig({
	plugins: [
		svelte({
			emitCss: production,
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: !production,
			},

			hot: !production ? {
				injectCss: true,
				partialAccept: true
			} : false
		}),
	],
	server: {
		port: 5000
	},
	build: {
		sourcemap: true
	},
    resolve: {
     alias: [{ find: '@', replacement: '/src' }],
    },
	css: {
		postcss: {
			plugins: [
				autoprefixer()
			]
		}
	}
});

// Babel
config.plugins?.unshift(legacy());

export default config;
