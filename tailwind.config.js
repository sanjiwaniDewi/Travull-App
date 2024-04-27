/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                titi: ["var(--font-titi)"],
                inter: ["var(--font-inter)"],
            },
            colors: {
                primary: {
                    100: "#7b9acc",
                    200: "#001528",
                },
                secondary: { 100: "#FCF6F5", 200: "#ADEFD1" },
            },
        },
    },
    plugins: [],
};
