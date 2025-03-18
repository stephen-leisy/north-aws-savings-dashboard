'use strict';

import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,svelte,ts}'], // Ensure Tailwind scans your Svelte files
	theme: {
		extend: {
			fontFamily: {
				redhat: ['"Red Hat Mono"', 'monospace'],
				satoshi: ['"Satoshi"', 'sans-serif']
			}
		}
	},
	plugins: []
};

export default config;
