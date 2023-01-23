/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Helvetica'],
			'mono': ['monospace']
		},
		extend: {
			colors: {
				black: '#000',
				a1: '#111',
				a2: '#222',
				a3: '#444',
				a4: '#666',
				a5: '#888',
				a6: '#999',
				a7: '#eaeaea',
				a8: '#fafafa',
				white: '#fff',

				transparent: 'transparent',
				current: 'currentColor'
			},
			keyframes: {
				animation: {
					glow: 'glow 3s linear infinite'
				},
				glow: {
					'0%': {
						opacity: 20
					},
					'33%': {
						opacity: 100
					},
					'100%': {
						opacity: 20
					}
				}
			}
		},
		plugins: [],
	}
