/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
	extend: {
		fontFamily: {
			zentry: [
				'zentry',
				'san-serif'
			],
			general: [
				'general',
				'san-serif'
			],
			'circular-web': [
				'circular-web',
				'san-serif'
			],
			'robert-medium': [
				'robert-medium',
				'san-serif'
			],
			'robert-regular': [
				'robert-regular',
				'san-serif'
			]
		},
		colors: {
			'background-primary': '#dfdff0',
			'accent-100': '#14b8a61a',

			background: 'hsl(var(--background))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
};
export const plugins = [require("tailwindcss-animate")];