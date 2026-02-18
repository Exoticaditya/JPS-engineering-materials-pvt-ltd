/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFB703', // Industrial Yellow / Amber
                secondary: '#023047', // Gunmetal Grey
                accent: '#219EBC', // Navy
                light: '#F1FAEE', // Light Grey/White alternate
                dark: '#0f172a', // Deep Navy (default background)
            },
            fontFamily: {
                heading: ['Rajdhani', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'industrial-grid': "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')", // Abstract grid or similar
            }
        },
    },
    plugins: [],
}
