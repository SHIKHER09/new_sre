/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#020617', // bg-slate-950
                'cyber-cyan': '#06b6d4', // cyan-500
                'neon-purple': '#a855f7', // purple-500
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' },
                    '50%': { opacity: '.5', boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)' },
                }
            }
        },
    },
    plugins: [],
}
