/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		screens: {
  			allMobile: {
  				min: '320px',
  				max: '639px'
  			},
  			mobileS: {
  				min: '320px',
  				max: '374px'
  			},
  			mobileM: {
  				min: '375px',
  				max: '424px'
  			},
  			mobileL: {
  				min: '425px',
  				max: '640px'
  			},
  			sm: {
  				min: '641px',
  				max: '767px'
  			},
  			md: {
  				min: '768px',
  				max: '1023px'
  			},
  			lg: {
  				min: '1024px',
  				max: '1281px'
  			},
  			xl: {
  				min: '1282px',
  				max: '1535px'
  			},
  			'2xl': '1536px',
  			allDekstop: {
  				min: '1023px'
  			},
  			allTab: {
  				min: '641px',
  				max: '1024px'
  			}
  		},
  		colors: {
  			black: '#171725',
  			'primary-dark': '#15121E',
  			'primary-light': '#231F33',
  			'primary-blue': '#2017B6',
  			'primary-blue-400': '#2017c1',
  			'primary-purple': '#591DA7',
  			'primary-purple-500': '#9747FF',
  			'primary-verde': '#002C45',
  			'dark-gray': '#676080',
  			'line-dark': '#eaeaea',
  			'line-gray': '#92929D',
  			'white-gray': '#F6F6F6'
  		},
  		backgroundImage: {
  			onboarding: "url('/assets/image/onboarding.png')"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
