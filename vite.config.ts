import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({})],

	define: {
		'process.env': {}
	},

	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: './runtimeConfig',
				replacement: './runtimeConfig.browser'
			}
		]
	}
});
