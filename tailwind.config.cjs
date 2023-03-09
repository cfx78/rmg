/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				woodsmoke: {
					50: '#f4f9f8',
					100: '#dcebe9',
					200: '#b9d6d2',
					300: '#8ebab6',
					400: '#679a97',
					500: '#4d7f7d',
					600: '#3c6565',
					700: '#335252',
					800: '#2c4243',
					900: '#0d1313',
				},
			},
		},
	},
	plugins: [],
};
