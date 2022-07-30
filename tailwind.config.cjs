/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		maxWidth: {
			prose: '75ch'
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '90ch'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
