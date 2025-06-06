import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                brand: {
                    primary: '#FFFFFF', // Fond principal
                    secondary: '#F0F0F0', // Fond secondaire
                    accent: '#AE5B5C',  // Accent / boutons
                    rose: '#C99192',
                    accent_premium: '#926E2A', //Accent premium
                    gold: '#D6B370',
                    text: '#333333',    // Texte principal
                    //heading: '#D6B370', // titres
                    //background: '#F0F0F0', // background
                },
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(-5%)' },
                    '50%': { transform: 'translateY(0)' },
                },
                rotate360: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                fadeInUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                floatDelay: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(15px)' },
                },
            },
        animation: {
            fadeIn: 'fadeIn 1s ease-in forwards',
            slideInUp: 'slideInUp 0.8s ease-out forwards',
            bounceSlow: 'bounceSlow 2s ease-in-out infinite',
            rotate360: 'rotate360 3s linear infinite',
            slideInLeft: 'slideInLeft 0.6s ease forwards',
            fadeInUp: 'fadeInUp 0.6s ease forwards',
            floatSlow: 'floatSlow 6s ease-in-out infinite',
            floatDelay: 'floatDelay 8s ease-in-out infinite',
        },
    },
},
plugins: [],
}
