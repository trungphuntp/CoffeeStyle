/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                common: {
                    black: "#1d1f2e",
                    lightgray: "#777982",
                },
                coffee: {
                    50: "#E8D6D0",
                    200: "#C89F94",
                    400: "#A25F4B",
                    600: "#744838",
                },

                textcolor: {
                    200: "#777982",
                    500: "#1d1f2e",
                },
            },
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            spacing: {
                "gap-header-menu": "1rem",
                "gap-header-menu-res": "0.75rem",
                "gap-page": "2rem",
                "gap-page-res": "1rem",
                "height-header": "5rem",
                "max-width-page": "1440px",
            },
            backgroundImage: {
                sliderImgBg: "url('./img/hero-img.jpg')",
            },
        },
    },
    plugins: [],
};
