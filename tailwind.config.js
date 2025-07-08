// tailwind.config.js
/** @type {import("tailwindcss").Config} */

module.exports = {
  purge: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jet": "#0F0F0F",
        "gold": "#FFD700",
        "champagne": "#F5DEB3",
        "purple": "#7F00FF",
        "textLight": "#E5E7EB",
      },
    },
  },
  plugins: [],
};