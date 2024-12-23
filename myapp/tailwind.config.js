/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		// Customize default font sizes
		fontSize: {
		  'xs': '0.875rem',     // 14px
		  'sm': '1rem',         // 16px
		  'base': '1.125rem',   // 18px
		  'lg': '1.25rem',      // 20px
		  'xl': '1.375rem',     // 22px
		  '2xl': '1.5rem',      // 24px
		  '3xl': '1.875rem',    // 30px
		  '4xl': '2.25rem',     // 36px
		  '5xl': '3rem',        // 48px
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' }
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' }
		  }
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out'
		}
	  }
	},
	plugins: [],
  }