/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: 'rgba(255, 67, 46, 1)',
            secondary: 'rgba(48, 16, 30, 1)',
            'nav-color': 'rgba(39, 12, 21, 0.5)',
            'backdrop-color': 'rgba(15, 5, 10, 0.9)',
            transparent: 'transparent',
        },
        extend: {
            backgroundImage: {
                hero: 'radial-gradient(circle at 50% -100%, #ff432e 0%, #30101e 70%)',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
