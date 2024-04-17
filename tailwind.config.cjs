/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '90ch'
					}
				}
			},
			colors: {
				facebook: {
					600: '#4267B2'
				},
				primary: {
					600: '#f56080'
				},
				link: {
					600: 'rgb(31, 175, 242)'
				}
			}
		}
	},
	safelist: [{ pattern: /(bg|text|border)-(green|facebook)-600/, variants: ['hover'] }],
	plugins: [require('@tailwindcss/typography')]
};
