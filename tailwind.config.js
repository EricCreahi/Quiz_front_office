/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textShadow: {
        default: "2px 2px 0 rgba(0, 0, 0, 0.1)",
        sm: "1px 1px 0 rgba(0, 0, 0, 0.1)",
        md: "3px 3px 0 rgba(0, 0, 0, 0.2)",
        lg: "5px 5px 0 rgba(0, 0, 0, 0.3)",
        // Add more custom shadows as needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const shadows = {
        ".text-shadow-default": {
          textShadow: "2px 2px 0 rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-sm": {
          textShadow: "1px 1px 0 rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 0 rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow-lg": {
          textShadow: "5px 5px 0 rgba(0, 0, 0, 0.3)",
        },
      };
      addUtilities(shadows, ["responsive", "hover"]);
    },
  ],
};
