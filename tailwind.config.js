/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060259.jpg?t=st=1734039966~exp=1734043566~hmac=f2648818f2b29fd7161522c21dfb8f5c87311a2ef36bf22aca46aec7df33be50&w=1800')",
      },
    },
  },
  plugins: [],
};
