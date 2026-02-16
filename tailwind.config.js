/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: "#171515",
                    card: "#0f0f0f",
                },
                border: "#505050",
                primary: {
                    DEFAULT: "#ffffff",
                    dimmed: "#C9C9C9",
                },
            },
            fontFamily: {
                sans: [
                    "Plus Jakarta Sans",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                ],
                bricolage: ["'Bricolage Grotesque'", "sans-serif"],
            },
        },
    },
    plugins: [],
};
