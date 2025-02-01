// tailwind.config.js
module.exports = {
  darkMode: "class", // Enable dark mode via a class on the <html> or <body>
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          light: "#60A5FA", // blue-400
          dark: "#2563EB", // blue-600
        },
        secondary: {
          DEFAULT: "#EF4444", // red-500
          light: "#F87171", // red-400
          dark: "#DC2626", // red-600
        },
        accent: {
          DEFAULT: "#10B981", // green-500
          light: "#34D399", // green-400
          dark: "#059669", // green-600
        },
        background: {
          light: "#F9FAFB", // gray-50
          dark: "#1F2937", // gray-800
        },
        card: {
          light: "#FFFFFF",
          dark: "#374151", // a darker gray
        },
      },
    },
  },
  plugins: [],
};
