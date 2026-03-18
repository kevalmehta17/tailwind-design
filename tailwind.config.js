  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          xs: "322px",
          sm: "426px",
          md: "768px",
          lg: "1025px",
        },
        colors: {
          gray: {
            50: "#f8f9fe", // light bg (about, badge)
            100: "#f5f5f5",
            200: "#f0f0f0",
            300: "#e4e4e4",
            400: "#cfcfcf",
            500: "#8b8b8b",
            600: "#545454",
            700: "#333333",
            800: "#2a2a2a",
            900: "#121212",
            light:"#E9E9E9",
            dark: "#727272",
          },
          pink: {
            50: "#fff6fd",
          },
          amber: {
            400: "#faaa4c",
          },
          
        },
      },
    },
    plugins: [],
  };
