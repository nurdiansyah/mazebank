/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,css,js,svelte,ts}',
		'./node_modules/flowbite/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			// Display Color Palette
			mainColor1: '#FFFFFF',
			mainColor2: '#FF7823',
			mainColor3: '#005AAF',
			mainColor4: '#FAFF00',
			mainColor5: '#81B0DE'
		},
		extend: {
			animation: {
				marquee: 'marquee 25s linear infinite'
			},
			boxShadow: {
				'right-bottom': '10px 10px 10px 0 rgba(0, 0, 0, 0.25)' // Adjust the values as needed
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-52%)' }
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
